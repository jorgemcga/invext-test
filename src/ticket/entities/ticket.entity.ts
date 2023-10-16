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
    ticketTypeId: number,
    supportId?: number,
    assigned_at?: Date,
    closed_at?: Date,
  ) {
    this.description = description;
    this.status = status;
    this.ticketTypeId = ticketTypeId;
    this.supportId = supportId;
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
