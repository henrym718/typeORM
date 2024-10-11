import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "dbtest",
  username: "henry",
  password: "12345",
  entities: [],
  subscribers: [],
  migrations: [],
  synchronize: true,
  logging: true,
});
