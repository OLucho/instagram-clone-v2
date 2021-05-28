import {
  BadRequestException,
  Controller,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/common/base.controller';
import { GetUser } from 'src/modules/user/decorator/get.user';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { User } from 'src/modules/user/user.entity';
import { UserService } from 'src/modules/user/user.service';
import { FollowService } from './follow.service';

@Controller('follow')
export class FollowController extends BaseController {
  constructor(
    private followService: FollowService,
    private userService: UserService,
  ) {
    super();
  }

  @Post('/:userId')
  @UseGuards(AuthGuard())
  async handleFollow(@Param('userId') userId: number, @GetUser() User: User) {
    const user = await this.userService.getUserById(userId);
    if (user.id === User.id) {
      throw new BadRequestException('You cant follow Yourself..');
    }

    const follow = await this.followService.getFollow(user.id, User.id); // (user to follow, user logged in)
    if (follow) {
      return await this.followService.deleteFollowById(follow.id);
    } else {
      return await this.followService.createFollow(user.id, User.id); // (user to follow, user logged in)
    }
  }
}
