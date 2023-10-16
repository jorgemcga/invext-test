import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InitialDataService } from './initial-data.service';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { Support } from 'src/support/entities/support.entity';
import { SupportTeam } from 'src/support-team/entities/support-team.entity';
import { TicketType } from 'src/ticket-type/entities/ticket-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ticket]),
    TypeOrmModule.forFeature([TicketType]),
    TypeOrmModule.forFeature([Support]),
    TypeOrmModule.forFeature([SupportTeam]),
  ],
  providers: [InitialDataService],
  exports: [InitialDataService],
})
export class TicketTypeModule {}
