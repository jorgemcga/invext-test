import { Injectable } from '@nestjs/common';
import { CreateSupportTeamDto } from './dto/create-support-team.dto';
import { UpdateSupportTeamDto } from './dto/update-support-team.dto';

@Injectable()
export class SupportTeamService {
  create(createSupportTeamDto: CreateSupportTeamDto) {
    return 'This action adds a new supportTeam';
  }

  findAll() {
    return `This action returns all supportTeam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supportTeam`;
  }

  update(id: number, updateSupportTeamDto: UpdateSupportTeamDto) {
    return `This action updates a #${id} supportTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} supportTeam`;
  }
}
