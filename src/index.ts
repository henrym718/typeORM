import { Brackets } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";
import { UnitOfWork } from "./unittowork/unitofwork";

AppDataSource.initialize().then(async (cnn) => {
  const usersInnerjoi = await cnn
    .createQueryBuilder()
    .select(["user.id", "user.name", "car.model"])
    .from(User, "user")
    .innerJoin("user.cars", "carclear")
    .getRawMany();

  console.log(usersInnerjoi);
});
