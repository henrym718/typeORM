import { Brackets } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;

  const insertUser = await manager
    .createQueryBuilder()
    .insert()
    .into(User)
    .values({
      name: "Isabel Mosquera",
      email: "isabel@gmail.com",
      age: 23,
      password: "12345",
    })
    .execute();

  console.log(insertUser);
});
