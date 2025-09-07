import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class VisitorInsights {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  month: string;

  @Column()
  loyalCustomers: number;

  @Column()
  newCustomers: number;

  @Column()
  uniqueCustomers: number;
}