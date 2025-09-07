import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class VisitorInsightsDto {
  @ApiProperty({ example: 'Jan' })
  @IsString()
  month: string;

  @ApiProperty({ example: 200 })
  @IsNumber()
  loyalCustomers: number;

  @ApiProperty({ example: 300 })
  @IsNumber()
  newCustomers: number;

  @ApiProperty({ example: 250 })
  @IsNumber()
  uniqueCustomers: number;
}
