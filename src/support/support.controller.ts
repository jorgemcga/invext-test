import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupportService } from './support.service';
import { CreateSupportDto } from './dto/create-support.dto';
import { UpdateSupportDto } from './dto/update-support.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Support')
@Controller('support')
export class SupportController {
  constructor(private readonly _service: SupportService) {}

  @Post()
  async create(@Body() request: CreateSupportDto) {
    try {
      const entity = await this._service.create(request);
      return {
        succes: true,
        data: entity,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error on create support',
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
        message: 'Error on get supports',
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
        message: 'Support not found',
        error: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() request: UpdateSupportDto) {
    try {
      const entity = await this._service.update(+id, request);
      return {
        succes: true,
        data: entity,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error on update support',
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
        message: 'Error on delete support',
        error: error.message,
      };
    }
  }
}
