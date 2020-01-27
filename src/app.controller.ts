import { Controller, Get } from '@nestjs/common'
import { AppService, RandomData } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): RandomData {
    return this.appService.getRandomData()
  }
}
