import { Brackets } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;

  // const sumAgeUsers = await manager
  //   .createQueryBuilder()
  //   .from(User, "user")
  //   .select("distinct user.age")
  //   .getRawMany();

  // console.log(sumAgeUsers);

  const usersByAge = await manager
    .createQueryBuilder(User, "user")
    .select("user.age, COUNT(*) AS count") // Contar usuarios por edad
    .groupBy("user.age")
    .getRawMany();

  const totalUsers = await manager
    .createQueryBuilder(User, "user")
    .select("COUNT(*) AS total") // Total de usuarios
    .getRawOne();

  const userCount = await manager
    .createQueryBuilder(User, "user")
    .select("COUNT(user.id) AS count") // Contar el número total de usuarios
    .getRawOne();

  const ageStatistics = await manager
    .createQueryBuilder(User, "user")
    .select("user.age, COUNT(*) AS count")
    .groupBy("user.age") // Agrupa por edad
    .having("age > 1") // Muestra solo edades con más de 1 usuario
    .getRawMany(); // Devuelve múltiples resultados

  const ageStatisticspag = await manager
    .createQueryBuilder(User, "user")
    .select("user.age, COUNT(*) AS count")
    .groupBy("user.age") // Agrupa por edad
    .having("age > 1") // Muestra solo edades con más de 1 usuario
    .offset(0)
    .limit(4)
    .orderBy({
      age: "DESC",
    })
    .getRawMany(); // Devuelve múltiples resultados

  console.log(ageStatisticspag); // Imprime las estadísticas de edad
});
