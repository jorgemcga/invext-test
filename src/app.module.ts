import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportModule } from './support/support.module';
import { TicketModule } from './ticket/ticket.module';
import { SupportTeamModule } from './support-team/support-team.module';
import { TicketTypeModule } from './ticket-type/ticket-type.module';
import { Ticket } from './ticket/entities/ticket.entity';
import { TicketType } from './ticket-type/entities/ticket-type.entity';
import { Support } from './support/entities/support.entity';
import { SupportTeam } from './support-team/entities/support-team.entity';
import { InitialDataService } from './initial-data/initial-data.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Ticket, TicketType, Support, SupportTeam],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Ticket]),
    TypeOrmModule.forFeature([TicketType]),
    TypeOrmModule.forFeature([Support]),
    TypeOrmModule.forFeature([SupportTeam]),
    SupportModule,
    TicketModule,
    SupportTeamModule,
    TicketTypeModule,
  ],
  providers: [InitialDataService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly initialDataService: InitialDataService) {}

  async onApplicationBootstrap() {
    await this.initialDataService.loadInitialData();
  }
}
