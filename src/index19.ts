import { Brackets } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const queryRunner = cnn.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    await queryRunner.manager
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

    await queryRunner.manager
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

    await queryRunner.commitTransaction();
    console.log("Transaccion con exito");
  } catch (error) {
    await queryRunner.rollbackTransaction();
    console.log("Transaccion fallida");
  } finally {
    await queryRunner.release();
  }
});
