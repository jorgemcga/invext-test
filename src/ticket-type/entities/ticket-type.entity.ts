import { SupportTeam } from 'src/support-team/entities/support-team.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class TicketType {
  constructor(name: string, supportTeamId: number) {
    this.name = name;
    this.supportTeamId = supportTeamId;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => SupportTeam)
  @JoinColumn({ name: 'supportTeamId' })
  supportTeam: SupportTeam;

  @Column()
  supportTeamId: number;

  @OneToMany(() => Ticket, (ticket) => ticket.ticketType)
  tickets: Ticket[];
}
