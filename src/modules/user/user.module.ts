import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { userService } from './user.service';

@Module({
  imports: [],
  providers: [userService],
  exports: [userService],
  controllers: [userController],
})
export class userModule {}
