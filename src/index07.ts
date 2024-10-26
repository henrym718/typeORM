import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;

  const id = 12;

  const users = await AppDataSource.getRepository(User)
    .createQueryBuilder("user")
    .select("user.id, user.name")
    .where("user.id= :id", { id })
    .getRawOne();

  const users2 = await AppDataSource.createQueryBuilder(User, "user")
    .select("user.id, user.name")
    .where("user.id= :id", { id })
    .getRawOne();

  const usersotherwey = await manager.findOne(User, { where: { id: 12 } });
  console.log(users);
});
