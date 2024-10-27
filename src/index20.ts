import { Brackets, EntityManager } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";
import { UnitOfWork } from "./unittowork/unitofwork";

AppDataSource.initialize().then(async (cnn) => {
  const unitOfWork = new UnitOfWork(cnn);

  const work = async (manager: EntityManager) => {
    await manager
      .createQueryBuilder()
      .insert()
      .into(Car)
      .values({
        brand: "Otro modelo 3",
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
        email: "camiladss@gmail.com",
        age: 23,
        password: "12345",
      })
      .execute();
  };

  await unitOfWork.transaction(work);
});
