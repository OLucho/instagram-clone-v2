import {
  Controller,
  Get,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Photo } from 'src/modules/photo/photo.entity';
import { PhotoService } from 'src/modules/photo/photo.service';
import { GetUser } from 'src/modules/user/decorator/get.user';
import { User } from 'src/modules/user/user.entity';
import { UserService } from 'src/modules/user/user.service';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
  constructor(
    private feedService: FeedService,
    private userService: UserService,
    private photoService: PhotoService,
  ) {}

  @Get()
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async feedData(
    @GetUser() User: User,
  ): Promise<{ isAuthor: boolean; isLiked: boolean; photo: Photo }> {
    const user = await this.userService.getUserFollows(User.id);
    const arrayUsersId = user.following.map((_user) => _user.userToId);
    arrayUsersId.push(User.id); // because we also want to show our photos in feed

    const feedsPhotos = await this.photoService.getFeedPhotos(arrayUsersId);

    return this.feedService.getFeedData(feedsPhotos, User.id);
  }

  @Get('/follows')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async viewFollows(@GetUser() user: User) {
    const userFollows = await this.userService.getUserFollows(user.id);
    const arrayUsersId = userFollows.following.map((_user) => _user.userToId);
    arrayUsersId.push(user.id);
    return await this.userService.getFollowsData(arrayUsersId);
  }
}
