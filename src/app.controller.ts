import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHelloTest(): string {
    return this.appService.getHelloTest();
  }

  @Get()
  getHello2(): string {
    return this.appService.getHello2();
  }

}
