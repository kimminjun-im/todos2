
// DB 연결 설정
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "todo_user",
  password: "Todo1234!@#",
  database: "todo_app",
  connectionLimit: 5,
});

module.exports = pool;

