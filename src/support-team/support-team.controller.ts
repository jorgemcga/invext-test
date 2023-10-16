import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupportTeamService } from './support-team.service';
import { CreateSupportTeamDto } from './dto/create-support-team.dto';
import { UpdateSupportTeamDto } from './dto/update-support-team.dto';

@Controller('support-team')
export class SupportTeamController {
  constructor(private readonly supportTeamService: SupportTeamService) {}

  @Post()
  create(@Body() createSupportTeamDto: CreateSupportTeamDto) {
    return this.supportTeamService.create(createSupportTeamDto);
  }

  @Get()
  findAll() {
    return this.supportTeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supportTeamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupportTeamDto: UpdateSupportTeamDto) {
    return this.supportTeamService.update(+id, updateSupportTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supportTeamService.remove(+id);
  }
}
