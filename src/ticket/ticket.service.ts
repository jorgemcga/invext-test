import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ITicketStatus, Ticket } from './entities/ticket.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportService } from 'src/support/support.service';
import { SupportTeamService } from 'src/support-team/support-team.service';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly _repository: Repository<Ticket>,
    private readonly _supportService: SupportService,
    private readonly _supportTeamService: SupportTeamService,
  ) {}

  // Custom methods
  async assingTicket(id: number, supportId: number) {
    const ticket = await this.findOne(id);
    const support = await this._supportService.findOne(supportId);

    if (ticket.status !== ITicketStatus.open) {
      throw new Error('Ticket already assigned');
    }
    if (support.supportTeamId !== ticket.ticketType.supportTeamId) {
      throw new Error("Support Team don't match with ticket type");
    }

    const supportAttendingTicket = await this.findMyAttendTickets(supportId);

    if (supportAttendingTicket.length >= 3) {
      throw new Error('Support not able to get more tickets');
    }

    ticket.status = ITicketStatus.in_progress;
    ticket.supportId = support.id;

    return this._repository.save(ticket);
  }

  async closeTicket(id: number) {
    const ticket = await this.findOne(id);
    ticket.status = ITicketStatus.closed;
    ticket.closed_at = new Date();
    return this._repository.save(ticket);
  }

  async findMyAttendTickets(supportId: number) {
    const support = await this._supportService.findOne(supportId);
    const list = await this._repository.find({
      where: {
        supportId: support.id,
        status: ITicketStatus.in_progress,
      },
    });
    return list;
  }

  async findPedingForTeam(supportTeamId: number) {
    const supportTeam = await this._supportTeamService.findOne(supportTeamId);
    if (!supportTeam.ticketTypes) {
      throw 'Support team without ticket type setup';
    }

    const list = await this._repository.find({
      where: {
        ticketTypeId: In(supportTeam.ticketTypes.map((tt) => tt.id)),
        status: ITicketStatus.open,
      },
    });
    return list;
  }

  // Default CRUD opertaions
  async create(request: CreateTicketDto): Promise<Ticket> {
    const newTicket = new Ticket(
      request.description,
      ITicketStatus.open,
      request.ticketTypeId,
    );
    return this._repository.save(newTicket);
  }

  async findAll(): Promise<Ticket[]> {
    return this._repository.find();
  }

  async findOne(id: number): Promise<Ticket> {
    const entity = await this._repository.findOne({
      where: { id },
      relations: ['ticketType'],
    });

    if (!entity) {
      throw new Error('Ticket not found');
    }

    return entity;
  }

  async update(id: number, request: UpdateTicketDto): Promise<Ticket> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Ticket not found');
    }

    for (const key in request) {
      if (request[key]) {
        entity[key] = request[key];
      }
    }

    return this._repository.save(entity);
  }

  async remove(id: number): Promise<Ticket> {
    const entity = await this._repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Ticket not found');
    }

    return await this._repository.remove(entity);
  }
}
