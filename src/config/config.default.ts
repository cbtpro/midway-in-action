import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1682414357461_166',
  koa: {
    port: 7001,
  },
  view: {
    defaultViewEngine: 'nunjucks',
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '172.17.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'midway-in-action',
        synchronize: false,
        logging: false,
        // 配置实体模型
        entities: ['**/entity/*.entity{.ts,.js}'],
      },
    },
  },
} as MidwayConfig;
