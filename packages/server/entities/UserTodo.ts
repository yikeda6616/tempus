import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserTodo {
  @PrimaryColumn()
  uid: number;

  @PrimaryGeneratedColumn()
  tid: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;
}
