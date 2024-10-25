import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const PAGE_SIZE = 1;
  const PAGE_CURRENT = 2;
  const SKIP = (PAGE_CURRENT - 1) * PAGE_SIZE;

  const carRepository = cnn.getRepository(Car);
  const [data, count] = await carRepository.findAndCount({
    order: { model: "ASC" },
    skip: SKIP,
    take: PAGE_SIZE,
  });
  console.log(count, data);
});
