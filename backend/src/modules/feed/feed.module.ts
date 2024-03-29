import { Module } from '@nestjs/common';
import { PhotoModule } from 'src/modules/photo/photo.module';
import { UserModule } from 'src/modules/user/user.module';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';

@Module({
  imports: [UserModule, PhotoModule],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
