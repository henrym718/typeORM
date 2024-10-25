import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;

  const carsRabge = await manager
    .createQueryBuilder()
    .from(Car, "car")
    .select("car.id, car.model")
    .where("car.id between :min and :max")
    .setParameters({ min: 6, max: 7 })
    .getRawMany();

  console.log(carsRabge);
});
