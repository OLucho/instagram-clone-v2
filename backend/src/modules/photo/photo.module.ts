import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeModule } from 'src/modules/like/like.module';
import { UserModule } from 'src/modules/user/user.module';
import { PhotoController } from './photo.controller';
import { PhotoRepository } from './photo.repository';
import { PhotoService } from './photo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PhotoRepository]),
    forwardRef(() => UserModule),
    forwardRef(() => LikeModule),
  ],
  controllers: [PhotoController],
  providers: [PhotoService],
  exports: [PhotoService],
})
export class PhotoModule {}
