import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TopProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}