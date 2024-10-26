import { Brackets } from "typeorm";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize().then(async (cnn) => {
  const manager = cnn.manager;

  await manager.query("CALL insert_user($1, $2, $3, $4, $5, $6)", [
    7,
    "Mafer",
    "Mafer@gmail.com",
    37,
    true,
    "12345",
  ]);
});

// VIDEO 6, min= 35
