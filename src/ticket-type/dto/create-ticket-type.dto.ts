import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketTypeDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  supportTeamId: number;
}
