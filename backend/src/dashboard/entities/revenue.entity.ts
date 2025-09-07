import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Revenue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: string;

  @Column()
  onlineSales: number;

  @Column()
  offlineSales: number;
}