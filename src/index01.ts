import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const userRepository = cnn.getRepository(User);

  const newUser = new User();

  newUser.name = "Juan";
  newUser.email = "selene2@gmail.com";
  newUser.age = 27;
  newUser.password = "12345";

  await userRepository.save(newUser);

  const list = await userRepository.find();
  const userFound = await userRepository.findOne({ where: { id: 2 } });
  const userAgeFound = await userRepository.findOne({ where: { age: 27 } });
  const [dataUser, count] = await userRepository.findAndCount({
    where: { active: true },
  });

  console.log(dataUser);
  //min 2:45
});
