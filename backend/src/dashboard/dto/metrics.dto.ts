import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class MetricsDto {
  @ApiProperty({ example: 1000 })
  @IsNumber()
  sales: number;

  @ApiProperty({ example: '+8%' })
  @IsString()
  salesChange: string;

  @ApiProperty({ example: 300 })
  @IsNumber()
  totalOrders: number;

  @ApiProperty({ example: '+5%' })
  @IsString()
  ordersChange: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  productsSold: number;

  @ApiProperty({ example: '+1.2%' })
  @IsString()
  productsChange: string;

  @ApiProperty({ example: 8 })
  @IsNumber()
  newCustomers: number;

  @ApiProperty({ example: '+0.5%' })
  @IsString()
  customersChange: string;
}
