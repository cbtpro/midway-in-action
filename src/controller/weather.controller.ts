import { Controller, Get } from '@midwayjs/core';

@Controller('/')
export class WeatherController {
  // 这是一个装饰器，定义一个路由
  @Get('/weather')
  async getWeatherInfo(): Promise<string> {
    return 'Hello Weather';
  }
}
