import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'karol_giruc',
  database: 'library',
});

db.query("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'karol_giruc'", (err, result) => {
    if (err) throw err;
    console.log("User altered");
});

export default db;