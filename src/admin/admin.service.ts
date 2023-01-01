import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { Model } from 'mongoose';
import { ISubscriber } from './entities/subscriber.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('subscribers')
    private readonly subscribersModel: Model<ISubscriber>,
  ) {}
  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }

  async addSubscriber(subscriber: CreateSubscriberDto) {
    await this.subscribersModel.create(subscriber);
  }
}
