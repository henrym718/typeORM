import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const carRepository = cnn.getRepository(Car);
  const userRepository = cnn.getRepository(User);

  const car1 = new Car();
  car1.brand = "Otro modelo 1";
  car1.model = "fs87";
  car1.color = "red";
  car1.year = 2025;

  const car2 = new Car();
  car2.brand = "Otro modelo 2";
  car2.model = "fs87";
  car2.color = "red";
  car2.year = 2025;

  const user1 = new User();
  user1.name = "Anita Mosquera";
  user1.age = 15;
  user1.email = "anita@gddmail.com";
  user1.password = "12345";
  user1.cars = Promise.resolve([car1, car2]);

  const user2 = new User();
  user2.name = "Henry Mosquera";
  user2.age = 15;
  user2.email = "henry@gddmail.com";
  user2.password = "12345";
  user2.cars = Promise.resolve([car2]);

  // await carRepository.save(car1);
  // await carRepository.save(car2);
  // await userRepository.save(user1);
  // await userRepository.save(user2);

  const users = await userRepository.findOne({ where: { id: 3 } });
  console.log(users);

  //LazyLoad
  const cars = await users.cars;
  console.log(cars);

  // const cars = await carRepository.find({ relations: ["users"] });
  // console.log(cars);
});
