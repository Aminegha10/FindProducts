import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "192.168.0.2",
    user: "intern_read",
    password: "25*S5*@9aV893I!@*73m",
    database: "dolibarr",
  })
  .promise();

const getConnectionDB = () => {
  return pool
    .getConnection()
    .then((connection) => {
      return (
        console.log("Database connection established"), connection.release()
      );
    })
    .catch((error) => {
      throw error;
    });
};

export { pool, getConnectionDB };
