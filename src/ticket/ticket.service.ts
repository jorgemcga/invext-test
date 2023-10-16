import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  async create(createTicketDto: CreateTicketDto) {
    // Crie uma nova instância de Ticket com base nos dados do DTO.
    // const newTicket = new Ticket();
    // Salve o novo ticket no banco de dados.
    return true;
    //  this.ticketRepository.save(
    // new Ticket(createTicketDto.description, createTicketDto.status),
    // );
  }

  async findAll() {
    return `This action returns all ticket`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  async remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
