import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class VolumeService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serviceName: string;

  @Column()
  volume: number;

  @Column()
  satisfactionRate: number;

  @Column()
  month: string;
}