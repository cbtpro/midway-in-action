import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { WeatherService } from '../service/weather.service';
import { ValidationError } from '../error/validation.error';

@Controller('/')
export class WeatherController {
  @Inject()
  weatherController: WeatherService;

  @Inject()
  ctx: Context;
  // 这是一个装饰器，定义一个路由
  // 访问/weather?cityId=101010100来测试接口
  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<void> {
    if (!cityId) {
      throw new ValidationError(new Error('cityId不能为空'));
    }
    const result = await this.weatherController.getWeather(cityId);
    if (result) {
      await this.ctx.render('info', result.weatherinfo);
    }
  }
}
