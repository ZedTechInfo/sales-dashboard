import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class VolumeServiceDto {
  @ApiProperty({ example: 'Customer Support' })
  @IsString()
  serviceName: string;

  @ApiProperty({ example: 150 })
  @IsNumber()
  volume: number;

  @ApiProperty({ example: 85 })
  @IsNumber()
  satisfactionRate: number;

  @ApiProperty({ example: '2024-01' })
  @IsString()
  month: string;
}