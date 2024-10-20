import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const carRepository = cnn.getRepository(Car);
  const userRepository = cnn.getRepository(User);

  const newCar = new Car();
  newCar.brand = "Otro modelo 1";
  newCar.model = "fs87";
  newCar.color = "red";
  newCar.year = 2025;

  console.log(newCar);

  const newCar1 = new Car();
  newCar1.brand = "Otro modelo 2";
  newCar1.model = "fs87";
  newCar1.color = "red";
  newCar1.year = 2025;

  const newUser = new User();
  newUser.name = "Anita Mosquera";
  newUser.age = 15;
  newUser.email = "anita@gddmail.com";
  newUser.password = "12345";
  newUser.cars = [newCar, newCar1];

  const newUser1 = new User();
  newUser1.name = "Henry Mosquera";
  newUser1.age = 15;
  newUser1.email = "henry@gddmail.com";
  newUser1.password = "12345";
  newUser1.cars = [newCar, newCar1];

  await carRepository.save(newCar);

  console.log(newCar);

  // await carRepository.save(newCar1);

  // await userRepository.save(newUser);
  // await userRepository.save(newUser1);
});
