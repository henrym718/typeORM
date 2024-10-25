import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;

  const id = 3;

  const users = await manager
    .createQueryBuilder()
    .select("user.id, user.name")
    .from(User, "user")
    .where("user.id= :id", { id })
    // .getSql();
    .getRawOne();

  console.log(users);
});
