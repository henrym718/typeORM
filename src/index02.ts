import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const carRepository = cnn.getRepository(Car);
  const userRepository = cnn.getRepository(User);

  const newCar = new Car();
  newCar.brand = "sssnokia nuevo";
  newCar.model = "fs87";
  newCar.color = "red";
  newCar.year = 2025;
  await carRepository.save(newCar);

  const newUser = new User();
  newUser.name = "Anita mOSQUERA";
  newUser.age = 15;
  newUser.email = "___ansssita@gddmail.com";
  newUser.password = "12345";
  newUser.car = newCar;

  await userRepository.save(newUser);

  const lisUCar = await carRepository.findOne({
    where: { id: 7 },
    relations: ["user"],
  });

  const lisUser = await userRepository.findOne({
    where: { id: 12 },
    relations: ["car"],
  });

  console.log(lisUser);
  console.log(lisUCar);
});
