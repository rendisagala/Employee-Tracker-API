const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  database: "employee_db",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log(`Database Connected!!`);
});

module.exports = db;
