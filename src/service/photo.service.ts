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

import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from '../entity/photo.entity';
import { photoDTO } from '../dto/photo';

@Provide()
export class PhotoService {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  async savePhoto(photo: photoDTO) {
    // const photo = new Photo();
    // photo.name = '日落';
    // photo.description = '风景';
    // photo.filename = 'sunset.jpg';
    // photo.views = 1;
    // photo.isPublished = true;

    const photoResult = await this.photoModel.save(photo);
    console.log('photo id is ', photoResult.id);
    return photoResult;
  }

  async findPhotoById(id: number) {
    const photo = await this.photoModel.find({
      where: {
        id,
      },
    });
    return photo;
  }
  async findPhotos() {
    const allPhotos = await this.photoModel.find({});
    console.log('All photos from the db: ', allPhotos);

    const firstPhoto = await this.photoModel.findOne({
      where: {
        id: 1,
      },
    });
    console.log('First photo from the db: ', firstPhoto);

    const sunsetPhoto = await this.photoModel.findOne({
      where: {
        name: '日落',
      },
    });
    console.log('从数据库中查询到日落照片:', sunsetPhoto);

    const allPublishedPhotos = this.photoModel.find({
      where: {
        isPublished: true,
      },
    });
    console.log('从数据库中查询到所有发布的照片：', allPublishedPhotos);

    const [photos, photosCount] = await this.photoModel.findAndCount({});
    console.log('All photos: ', photos);
    console.log('Photos count: ', photosCount);
  }
}
