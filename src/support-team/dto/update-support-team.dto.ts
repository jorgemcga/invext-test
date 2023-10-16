import { PartialType } from '@nestjs/swagger';
import { CreateSupportTeamDto } from './create-support-team.dto';

export class UpdateSupportTeamDto extends PartialType(CreateSupportTeamDto) {}
