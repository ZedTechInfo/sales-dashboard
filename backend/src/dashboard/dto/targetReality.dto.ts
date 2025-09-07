import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class TargetRealityDto {
  @ApiProperty({ example: 'Q1' })
  @IsString()
  period: string;

  @ApiProperty({ example: 50000 })
  @IsNumber()
  target: number;

  @ApiProperty({ example: 45000 })
  @IsNumber()
  reality: number;

  @ApiProperty({ example: 90 })
  @IsNumber()
  percentage: number;
}