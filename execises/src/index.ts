import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then((conn) => {
    console.log("coneccted db");
  })
  .catch((error) => {
    console.log(error);
  });
