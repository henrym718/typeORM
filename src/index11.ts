import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;

  const carsRabge = await manager
    .createQueryBuilder()
    .from(Car, "car")
    .select("car.id, car.model")
    .where("car.id >=:idMin and car.id <=:idMax")
    .setParameters({ idMin: 5, idMax: 8 })
    .getRawMany();

  console.log(carsRabge);

  const carsRabge_1 = await manager
    .createQueryBuilder()
    .from(Car, "car")
    .select("car.id, car.model")
    .where("car.id >=:idMin")
    .andWhere("car.id <=:idMax")
    .setParameters({ idMin: 5, idMax: 8 })
    .getRawMany();
  console.log(carsRabge_1);
});
