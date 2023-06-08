import { Controller, Get, Inject } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home(): Promise<void> {
    // return 'Hello Midwayjs!';
    await this.ctx.render('index', { message: 'Hello Midwayjs!' });
  }
}
