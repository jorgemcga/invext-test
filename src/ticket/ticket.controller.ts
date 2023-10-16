import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(@Body() createTicketDto: CreateTicketDto) {
    try {
      // Valide os dados usando o DTO e a lógica de validação definida no DTO.
      const newTicket = await this.ticketService.create(createTicketDto);
      return this.ticketService.create(createTicketDto);

      // Se a criação for bem-sucedida, retorne o ticket criado e um status HTTP 201 (Created).
      return {
        message: 'Ticket criado com sucesso',
        ticket: newTicket,
      };
    } catch (error) {
      // Se ocorrer um erro na criação, retorne um status HTTP 400 (Bad Request) e uma mensagem de erro.
      return {
        message: 'Falha na criação do ticket',
        error: error.message, // Você pode personalizar a mensagem de erro conforme necessário.
      };
    }
  }

  // TODO: Criar lógica
  @Post(':id/assign')
  assignTicket(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  // TODO: Criar lógica
  @Post(':id/close')
  closeTicket(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  // TODO: Criar lógica
  @Get('/mine')
  getMyTickets(@Param('supportId') supportId: number) {
    return this.ticketService.findAll();
  }

  // TODO: Criar lógica
  @Get('/peding')
  getPending(@Param('supportId') supportId: number) {
    return this.ticketService.findAll();
  }

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(+id);
  }
}
