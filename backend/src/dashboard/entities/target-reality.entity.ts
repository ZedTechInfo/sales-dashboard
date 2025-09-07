import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TargetReality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  period: string;

  @Column()
  target: number;

  @Column()
  reality: number;

  @Column()
  percentage: number;
}