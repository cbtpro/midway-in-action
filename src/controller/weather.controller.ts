import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';
import { IWeatherInfo } from '../interface';

@Controller('/')
export class WeatherController {
  @Inject()
  weatherController: WeatherService;
  // 这是一个装饰器，定义一个路由
  // 访问/weather?cityId=101010100来测试接口
  @Get('/weather')
  async getWeatherInfo(@Query('id') cityId: string): Promise<IWeatherInfo> {
    return this.weatherController.getWeather(cityId);
  }
}
