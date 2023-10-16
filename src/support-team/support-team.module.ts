import { Module } from '@nestjs/common';
import { SupportTeamService } from './support-team.service';
import { SupportTeamController } from './support-team.controller';

@Module({
  controllers: [SupportTeamController],
  providers: [SupportTeamService],
})
export class SupportTeamModule {}
