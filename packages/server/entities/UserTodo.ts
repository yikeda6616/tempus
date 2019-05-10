import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserTodo {
  @PrimaryColumn()
  uid: number;

  @PrimaryGeneratedColumn('uuid')
  tid: string;

  @Column()
  name: string;

  @Column()
  createdAt: Date;
}
