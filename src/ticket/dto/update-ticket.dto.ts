import { ApiProperty } from '@nestjs/swagger';

export class UpdateTicketDto {
  @ApiProperty()
  description: string;
}
