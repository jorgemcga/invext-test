import { Injectable } from '@nestjs/common';
import { CreateSupportTeamDto } from './dto/create-support-team.dto';
import { UpdateSupportTeamDto } from './dto/update-support-team.dto';
import { Repository } from 'typeorm';
import { SupportTeam } from './entities/support-team.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SupportTeamService {
  constructor(
    @InjectRepository(SupportTeam)
    private readonly _repository: Repository<SupportTeam>,
  ) {}

  async create(request: CreateSupportTeamDto): Promise<SupportTeam> {
    const newTicket = new SupportTeam(request.name);
    return this._repository.save(newTicket);
  }

  async findAll(): Promise<SupportTeam[]> {
    return this._repository.find();
  }

  async findOne(id: number): Promise<SupportTeam> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('SupportTeam not found');
    }

    return entity;
  }

  async update(
    id: number,
    request: UpdateSupportTeamDto,
  ): Promise<SupportTeam> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('SupportTeam not found');
    }

    if (request.name) {
      entity.name = request.name;
    }

    return this._repository.save(entity);
  }

  async remove(id: number): Promise<SupportTeam> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('SupportTeam not found');
    }

    return await this._repository.remove(entity);
  }
}
