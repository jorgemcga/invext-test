import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupportTeamService } from './support-team.service';
import { CreateSupportTeamDto } from './dto/create-support-team.dto';
import { UpdateSupportTeamDto } from './dto/update-support-team.dto';

@Controller('support-team')
export class SupportTeamController {
  constructor(private readonly _service: SupportTeamService) {}

  @Post()
  async create(@Body() request: CreateSupportTeamDto) {
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
        message: 'Error on get support teams',
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
        message: 'Support team not found',
        error: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() request: UpdateSupportTeamDto) {
    try {
      const entity = await this._service.update(+id, request);
      return {
        succes: true,
        data: entity,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error on update support teams',
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
        message: 'Error on delete support team',
        error: error.message,
      };
    }
  }
}
