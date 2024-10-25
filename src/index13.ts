import { Brackets } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;

  const sumAgeUsers = await manager
    .createQueryBuilder(User, "user")
    .select("sum(user.age)", "sum")
    .getRawOne();

  console.log(sumAgeUsers);
});
