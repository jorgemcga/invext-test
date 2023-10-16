import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketController } from './ticket/ticket.controller';
import { TicketService } from './ticket/ticket.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportModule } from './support/support.module';
import { TicketModule } from './ticket/ticket.module';
import { SupportTeamModule } from './support-team/support-team.module';
import { TicketTypeModule } from './ticket-type/ticket-type.module';
import { Ticket } from './ticket/entities/ticket.entity';
import { TicketType } from './ticket-type/entities/ticket-type.entity';
import { Support } from './support/entities/support.entity';
import { SupportTeam } from './support-team/entities/support-team.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Ticket, TicketType, Support, SupportTeam],
      synchronize: true,
    }),
    SupportModule,
    TicketModule,
    SupportTeamModule,
    TicketTypeModule,
  ],
  controllers: [AppController, TicketController],
  providers: [AppService, TicketService],
})
export class AppModule {}
