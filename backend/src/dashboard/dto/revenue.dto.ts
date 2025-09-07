import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RevenueDto {
  @ApiProperty({ example: 'Monday' })
  @IsString()
  day: string;

  @ApiProperty({ example: 15000 })
  @IsNumber()
  onlineSales: number;

  @ApiProperty({ example: 10000 })
  @IsNumber()
  offlineSales: number;
}
