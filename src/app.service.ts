import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloTest(): string {
    return 'Hello World test!';
  }
  getHello2(): string {
    return 'Hello World2!';
  }
}
