import { ApiProperty } from '@nestjs/swagger';

export class CreateSupportDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  login: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  supportTeamId: number;
}
