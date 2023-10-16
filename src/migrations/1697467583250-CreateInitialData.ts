/* eslint-disable @typescript-eslint/no-unused-vars */
import { InjectRepository } from '@nestjs/typeorm';
import { SupportTeam } from 'src/support-team/entities/support-team.entity';
import { Support } from 'src/support/entities/support.entity';
import { TicketType } from 'src/ticket-type/entities/ticket-type.entity';
import { ITicketStatus, Ticket } from 'src/ticket/entities/ticket.entity';
import { MigrationInterface, QueryRunner, Repository } from 'typeorm';

export class CreateInitialData1697467583250 implements MigrationInterface {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @InjectRepository(TicketType)
    private readonly ticketTypeRepository: Repository<TicketType>,
    @InjectRepository(Support)
    private readonly supportRepository: Repository<Support>,
    @InjectRepository(SupportTeam)
    private readonly supportTeamRepository: Repository<SupportTeam>,
  ) {}

  public async up(_queryRunner: QueryRunner): Promise<void> {
    await this._createSupportTeams();
    await this._createSupport();
    await this._createTicketTypes();
    await this._createTickets();
  }

  private async _createSupportTeams(): Promise<void> {
    const supportTeams: SupportTeam[] = [
      new SupportTeam('Cartões'),
      new SupportTeam('Empréstimos'),
      new SupportTeam('Outros Assuntos'),
    ];

    await this.supportTeamRepository.save(supportTeams);
  }

  private async _createSupport(): Promise<void> {
    const supports: Support[] = [
      new Support('João', 'joao.123', 'joao.123@gmail.com', 1),
      new Support('Dorival', 'dorival.123', 'dorival.123@gmail.com', 2),
      new Support('Maria', 'maria.123', 'maria.123@gmail.com', 3),
    ];

    await this.supportRepository.save(supports);
  }

  private async _createTicketTypes(): Promise<void> {
    const ticketTypes: TicketType[] = [
      new TicketType('Problemas com cartão', 1),
      new TicketType('Contratação de empréstimo', 2),
      new TicketType('Assuntos diversos', 3),
    ];

    await this.ticketTypeRepository.save(ticketTypes);
  }

  private async _createTickets(): Promise<void> {
    const exampleTickets: Ticket[] = [
      new Ticket(
        'Problema com meu cartão de crédito',
        ITicketStatus.in_progress,
        1,
        1,
        new Date(),
        null,
      ),
      new Ticket(
        'Não consigo contratar meu empréstimo',
        ITicketStatus.in_progress,
        2,
        2,
        new Date(),
        null,
      ),
      new Ticket(
        'Gostaria de mais informações sobre o produto',
        ITicketStatus.in_progress,
        3,
        3,
        new Date(),
        null,
      ),
    ];

    await this.ticketRepository.save(exampleTickets);
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
