import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  brand: string;

  @Column({ type: "varchar", length: 50 })
  model: string;

  @Column({ type: "varchar", length: 30 })
  color: string;

  @Column({ type: "int" })
  year: number;

  @ManyToMany(() => User, (user) => user.cars)
  users: User[];
}
