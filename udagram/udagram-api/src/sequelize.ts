import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port: config.dbPort,
//   dialect: "postgres",
//   storage: ":memory:",
// });

export const sequelize = new Sequelize(
  "postgres://postgres:ayaahmed28@database-1.cbthux4heqcp.us-east-1.rds.amazonaws.com:5433/postgres"
);
