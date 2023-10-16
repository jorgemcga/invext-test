import { ApiProperty } from '@nestjs/swagger';

export class CreateSupportTeamDto {
  @ApiProperty()
  name: string;
}
