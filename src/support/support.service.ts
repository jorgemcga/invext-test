import { Injectable } from '@nestjs/common';
import { CreateSupportDto } from './dto/create-support.dto';
import { UpdateSupportDto } from './dto/update-support.dto';
import { Support } from './entities/support.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(Support)
    private readonly _repository: Repository<Support>,
  ) {}

  async create(request: CreateSupportDto): Promise<Support> {
    const newTicket = new Support(
      request.name,
      request.login,
      request.email,
      request.supportTeamId,
    );
    return this._repository.save(newTicket);
  }

  async findAll(): Promise<Support[]> {
    return this._repository.find();
  }

  async findOne(id: number): Promise<Support> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Support not found');
    }

    return entity;
  }

  async update(id: number, request: UpdateSupportDto): Promise<Support> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Support not found');
    }

    for (const key in request) {
      if (request[key]) {
        entity[key] = request[key];
      }
    }

    return this._repository.save(entity);
  }

  async remove(id: number): Promise<Support> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Support not found');
    }

    return await this._repository.remove(entity);
  }
}
