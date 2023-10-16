import { Support } from 'src/support/entities/support.entity';
import { TicketType } from 'src/ticket-type/entities/ticket-type.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export const ITicketStatus = {
  open: 'Aberto',
  in_progress: 'Em progresso',
  closed: 'Finalizado',
};

@Entity()
export class Ticket {
  constructor(
    description: string,
    status: string,
    supportId: number,
    ticketTypeId: number,
    assigned_at: Date | null,
    closed_at: Date | null,
  ) {
    this.description = description;
    this.status = status;
    this.supportId = supportId;
    this.ticketTypeId = ticketTypeId;
    this.assigned_at = assigned_at;
    this.closed_at = closed_at;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  closed_at: Date;

  @Column()
  assigned_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Support)
  @JoinColumn({ name: 'supportId' })
  support: Support;

  @Column()
  supportId: number;

  @ManyToOne(() => TicketType)
  @JoinColumn({ name: 'ticketTypeId' })
  ticketType: TicketType;

  @Column()
  ticketTypeId: number;
}
