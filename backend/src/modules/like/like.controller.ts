import {
  Controller,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/common/base.controller';
import { PhotoService } from 'src/modules/photo/photo.service';
import { GetUser } from 'src/modules/user/decorator/get.user';
import { User } from 'src/modules/user/user.entity';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController extends BaseController {
  constructor(
    private likeService: LikeService,
    private photoService: PhotoService,
  ) {
    super();
  }

  @Post('/:id')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async handleLike(@Param('id') id: number, @GetUser() user: User) {
    const photo = await this.photoService.getPhotoById(id);

    const like = await this.likeService.findLikeByUserAndPhotoId(
      user.id,
      photo.id,
    );

    if (!like) {
      return this.likeService.addLike(user.id, photo.id);
    } else {
      return this.likeService.removeLike(like);
    }
  }
}
