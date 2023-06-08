// Copyright 2023 chenbitao
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { close, createApp, createHttpRequest } from '@midwayjs/mock';
import { Application, Framework } from '@midwayjs/koa';

describe('test/controller/weather.test.ts', () => {
  let app: Application;
  beforeAll(async () => {
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  it('测试请求天气是否成功', async () => {
    const result = await createHttpRequest(app).get('/weather').query({
      cityId: '101010100',
    });
    expect(result.status).toBe(200);
    expect(result.text).toMatch(/北京/);
  });

  it('测试请求天气参数为空失败的情况', async () => {
    const result = await createHttpRequest(app).get('/weather');
    expect(result.status).toBe(200);
    expect(result.text).toMatch(/weather data is empty/);
  });

  it('测试请求天气失败的情况', async () => {
    const result = await createHttpRequest(app).get('/weather').query({
      cityId: 'xxx',
    });
    expect(result.status).toBe(200);
    expect(result.text).toMatch(/weather data is empty/);
  });
});
