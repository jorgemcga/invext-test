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

@Entity()
export class Ticket {
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

  @ManyToOne(() => TicketType)
  @JoinColumn({ name: 'ticketTypeId' })
  ticketType: TicketType;
}
