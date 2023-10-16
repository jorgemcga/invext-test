import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketTypeService } from './ticket-type.service';
import { CreateTicketTypeDto } from './dto/create-ticket-type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ticket Type')
@Controller('ticket-type')
export class TicketTypeController {
  constructor(private readonly _service: TicketTypeService) {}

  @Post()
  async create(@Body() request: CreateTicketTypeDto) {
    try {
      const entity = await this._service.create(request);
      return {
        succes: true,
        data: entity,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error on create ticket type',
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
        message: 'Error on get ticket types',
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
        message: 'Ticket type not found',
        error: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() request: UpdateTicketTypeDto) {
    try {
      const entity = await this._service.update(+id, request);
      return {
        succes: true,
        data: entity,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error on update ticket type',
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
        message: 'Error on delete ticket type',
        error: error.message,
      };
    }
  }
}
