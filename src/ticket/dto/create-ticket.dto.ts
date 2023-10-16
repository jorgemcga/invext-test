import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty()
  description: string;
  @ApiProperty()
  ticketTypeId: number;
}
