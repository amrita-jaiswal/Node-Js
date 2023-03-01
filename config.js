const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "test",
});

con.connect((err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("connected");
  }
});

module.exports = con;
