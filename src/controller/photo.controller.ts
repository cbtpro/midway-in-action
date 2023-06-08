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

import { Body, Controller, Get, Inject, Post, Query } from '@midwayjs/core';
import { PhotoService } from '../service/photo.service';
import { photoDTO } from '../dto/photo';
import { ValidationError } from '../error/validation.error';

@Controller('/photo')
export class PhotoController {
  @Inject()
  photoService: PhotoService;

  @Post('/save_photo')
  async savePhoto(@Body() photo: photoDTO) {
    const result = await this.photoService.savePhoto(photo);
    return result;
  }

  @Get('/get_photo')
  async queryPhoto(@Query('id') id: number) {
    if (!id) {
      throw new ValidationError(new Error('照片id不能为空'));
    }
    const result = await this.photoService.findPhotoById(id);
    return result;
  }
}
