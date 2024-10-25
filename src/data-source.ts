import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Car } from "./entity/Car";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "dbtest",
  username: "henry",
  password: "12345",
  entities: [User, Car],
  logging: false,
  synchronize: true,
});
