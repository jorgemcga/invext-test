import { SupportTeam } from 'src/support-team/entities/support-team.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Support {
  constructor(
    name: string,
    login: string,
    email: string,
    supportTeamId: number,
  ) {
    this.name = name;
    this.login = login;
    this.email = email;
    this.supportTeamId = supportTeamId;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  email: string;

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
