import { Brackets } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";
import { UnitOfWork } from "./unittowork/unitofwork";

AppDataSource.initialize().then(async (cnn) => {
  const cars = await AppDataSource.createQueryBuilder()
    .select("car")
    .from(Car, "car")
    .getMany();

  const timber = await AppDataSource.createQueryBuilder()
    .select("user")
    .from(User, "user")
    .where("user.id = :id OR user.name = :name", { id: 12, name: "Timber" })
    .getOne();

  console.log(timber);
});
