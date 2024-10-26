import { Brackets } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";
import { UnitOfWork } from "./unittowork/unitofwork";

AppDataSource.initialize().then(async (cnn) => {
  const unitOfWork = new UnitOfWork(cnn);

  await unitOfWork.start();

  const work = async () => {
    const manager = unitOfWork.getManager();
    await manager
      .createQueryBuilder()
      .insert()
      .into(Car)
      .values({
        brand: "Otro modelo 2",
        model: "fs87",
        color: "red",
        year: 2025,
      })
      .execute();

    await manager
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        name: "Camila Mosquera",
        email: "camila@gmail.com",
        age: 23,
        password: "12345",
      })
      .execute();
  };

  await unitOfWork.transaction(work);
});
