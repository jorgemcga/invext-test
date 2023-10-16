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
import { ApiTags } from '@nestjs/swagger';
import { AssignTicketDto } from './dto/assing-ticket.dto';

@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
  constructor(private readonly _service: TicketService) {}

  // TODO: Criar lógica
  @Post(':id/assign')
  assignTicket(@Param('id') id: string, @Body() request: AssignTicketDto) {
    return this._service.assingTicket(+id, request.supportId);
  }

  // TODO: Criar lógica
  @Post(':id/close')
  closeTicket(@Param('id') id: string) {
    return this._service.closeTicket(+id);
  }

  // TODO: Criar lógica
  @Get('/attend/:supportId')
  findMyAttendTickets(@Param('supportId') supportId: number) {
    return this._service.findMyAttendTickets(+supportId);
  }

  // TODO: Criar lógica
  @Get('/peding/:supportTeamId')
  getPending(@Param('supportTeamId') supportTeamId: number) {
    return this._service.findPedingForTeam(supportTeamId);
  }

  @Post()
  async create(@Body() request: CreateTicketDto) {
    try {
      const entity = await this._service.create(request);
      return {
        succes: true,
        data: entity,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error on create ticket',
        error: error.message,
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const list = await this._service.findAll();
      return {
        succes: true,
        data: list,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error on get tickets',
        error: error.message,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const entity = await this._service.findOne(+id);
      return {
        succes: true,
        data: entity,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Ticket not found',
        error: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() request: UpdateTicketDto) {
    try {
      const entity = await this._service.update(+id, request);
      return {
        succes: true,
        data: entity,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error on update ticket',
        error: error.message,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const entity = await this._service.remove(+id);
      return {
        succes: true,
        data: entity,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error on delete ticket',
        error: error.message,
      };
    }
  }
}
