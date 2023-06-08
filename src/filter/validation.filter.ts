// Copyright 2023 Peter Chen
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

import { Catch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ValidationError } from '../error/validation.error';

@Catch(ValidationError)
export class ValidationErrorFilter {
  async catch(error: ValidationError, ctx: Context) {
    ctx.logger.error(error);
    const { message } = error;
    ctx.status = 400;
    return {
      success: false,
      message: message,
    };
  }
}
