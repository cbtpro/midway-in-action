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

import {
  App,
  IMidwayApplication,
  ISimulation,
  Inject,
  MidwayMockService,
  Mock,
} from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';

@Mock()
export class WeatherDataMock implements ISimulation {
  @App()
  app: IMidwayApplication;

  @Inject()
  mockService: MidwayMockService;

  async setup(): Promise<void> {
    const originMethod = WeatherService.prototype.getWeather;
    this.mockService.mockClassProperty(
      WeatherService,
      'getWeather',
      async cityId => {
        if (cityId === '101010100') {
          return {
            weatherinfo: {
              city: '北京',
              cityid: '101010100',
              temp1: '18℃',
              temp2: '31℃',
              weather: '多云转阴',
              img1: 'n1.gif',
              img2: 'd2.gif',
              ptime: '18:00',
            },
          };
        } else {
          return originMethod.apply(this, [cityId]);
        }
      }
    );
  }

  enableCondition(): boolean | Promise<boolean> {
    return ['local', 'test', 'unittest'].includes(this.app.getEnv());
  }
}
