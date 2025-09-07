import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Metric {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sales: number;

  @Column()
  salesChange: string;

  @Column()
  totalOrders: number;

  @Column()
  ordersChange: string;

  @Column()
  productsSold: number;

  @Column()
  productsChange: string;

  @Column()
  newCustomers: number;

  @Column()
  customersChange: string;
}