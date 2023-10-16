import { ApiProperty } from '@nestjs/swagger';

export class AssignTicketDto {
  @ApiProperty()
  supportId: number;
}
