import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;

  const user = await manager
    .createQueryBuilder()
    .update(User)
    .set({ email: "henry@gmail.com" })
    .where("id = :id", { id: 4 })
    .execute();

  console.log(user);

  await manager
    .createQueryBuilder()
    .delete()
    .from(Car)
    .where("id = :id", { id: 4 })
    .execute();
});
