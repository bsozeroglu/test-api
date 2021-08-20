import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  constructor() {
    //to do
  }

  async getUserHello(userId: any) {
    const result = `Merhabalar Kullanıcımerhabaaaalaaar: ${userId}`;
    return result;
  }
}
