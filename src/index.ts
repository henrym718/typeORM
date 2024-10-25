import { Brackets } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;
  const cars = await manager
    .createQueryBuilder()
    .from(User, "user")
    .select(["user.id", "user.name", "user.age", "user.active"])
    .where(
      new Brackets((qb) => {
        qb.where("user.age between :nMin and :nMax", {
          nMin: 15,
          nMax: 20,
        }).andWhere("user.active = :bol", { bol: false });
      })
    )
    .andWhere(
      new Brackets((qb) => {
        qb.where("user.name like :name", { name: "%Mosq%" });
      })
    )
    .getRawMany();

  console.log(cars);
});
