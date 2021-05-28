import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/db.config';
import { UserModule } from './modules/user/user.module';
import { PhotoModule } from './modules/photo/photo.module';
import { LikeModule } from './modules/like/like.module';
import { CommentModule } from './modules/comment/comment.module';
import { FollowModule } from './modules/follow/follow.module';
import { FeedModule } from './modules/feed/feed.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    UserModule,
    PhotoModule,
    LikeModule,
    CommentModule,
    FollowModule,
    FeedModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
