import { Injectable } from '@nestjs/common';
import { CreateTicketTypeDto } from './dto/create-ticket-type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket-type.dto';
import { TicketType } from './entities/ticket-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TicketTypeService {
  constructor(
    @InjectRepository(TicketType)
    private readonly _repository: Repository<TicketType>,
  ) {}

  async create(request: CreateTicketTypeDto): Promise<TicketType> {
    const newTicket = new TicketType(request.name, request.supportTeamId);
    return this._repository.save(newTicket);
  }

  async findAll(): Promise<TicketType[]> {
    return this._repository.find();
  }

  async findOne(id: number): Promise<TicketType> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Ticket type not found');
    }

    return entity;
  }

  async update(id: number, request: UpdateTicketTypeDto): Promise<TicketType> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Ticket type not found');
    }

    if (request.name) {
      entity.name = request.name;
    }

    if (request.supportTeamId) {
      entity.supportTeamId = request.supportTeamId;
    }

    return this._repository.save(entity);
  }

  async remove(id: number): Promise<TicketType> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Ticket type not found');
    }

    return await this._repository.remove(entity);
  }
}
