import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { userService } from './user.service';

@ApiTags('user')
@Controller('user')
export class userController {
  constructor(private userService: userService) {
    //to do
  }

  @ApiQuery({ name: 'userId' })
  @Get('/getuser')
  async getUser(@Query() query: any): Promise<any> {
    const result = this.userService.getUserHello(query.userId);
    return result;
  }
}
