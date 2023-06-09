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
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('table_photo')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 100,
  })
  name: string;
  @Column({
    length: 2000,
  })
  description: string;
  @Column({
    length: 200,
  })
  filename: string;
  @Column({
    type: 'double',
    default: 0,
  })
  views: number;
  @Column()
  isPublished: boolean;
  @CreateDateColumn({
    type: 'timestamp',
  })
  createDate: Date;
  @UpdateDateColumn({
    type: 'timestamp',
  })
  updateDate: Date;
}
