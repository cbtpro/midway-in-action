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

import { Provide, makeHttpRequest } from '@midwayjs/core';
import { IWeatherInfo } from '../interface';
import { WeatherEmptyDataError } from '../error/weather.error';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<IWeatherInfo> {
    if (!cityId) {
      throw new WeatherEmptyDataError();
    }
    try {
      const result = await makeHttpRequest<IWeatherInfo>(
        `http://www.weather.com.cn/data/cityinfo/${cityId}.html`,
        {
          dataType: 'json',
        }
      );
      if (result.status === 200) {
        return result.data as IWeatherInfo;
      }
    } catch (error) {
      throw new WeatherEmptyDataError(error);
    }
  }
}
