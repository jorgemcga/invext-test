import { Support } from 'src/support/entities/support.entity';
import { TicketType } from 'src/ticket-type/entities/ticket-type.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SupportTeam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Support, (support) => support.supportTeam)
  supports: Support[];

  @OneToMany(() => TicketType, (ticketType) => ticketType.supportTeam)
  ticketTypes: TicketType[];
}
