import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { SupportService } from 'src/support/support.service';
import { SupportTeamService } from 'src/support-team/support-team.service';
import { SupportTeam } from 'src/support-team/entities/support-team.entity';
import { Support } from 'src/support/entities/support.entity';
import { TicketType } from 'src/ticket-type/entities/ticket-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ticket]),
    TypeOrmModule.forFeature([TicketType]),
    TypeOrmModule.forFeature([Support]),
    TypeOrmModule.forFeature([SupportTeam]),
  ],
  controllers: [TicketController],
  providers: [TicketService, SupportService, SupportTeamService],
  exports: [TicketService],
})
export class TicketModule {}
