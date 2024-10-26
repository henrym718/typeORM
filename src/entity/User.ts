import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Car } from "./Car";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  name: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "int" })
  age: number;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @Column({ type: "varchar", length: 20 })
  password: string;

  @ManyToMany(() => Car, (car) => car.users)
  @JoinTable()
  cars: Promise<Car[]>;
}
