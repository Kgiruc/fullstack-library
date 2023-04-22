import db from "../database/db.js";
import jwt from "jsonwebtoken"


const getRegister = (req, res) => {
    const { name, login, password, isAdmin } = req.body;
    const q = 'INSERT INTO library.users (name, login, password, isAdmin) VALUES (?, ?, ?, ?)';
    const values = [name, login, password, isAdmin];
  
    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.json('User has been created successfully');
    });
  };

  const getLogin = (req, res) => {
    const { login, password } = req.body;
    const q = 'SELECT * FROM library.users WHERE login = ? AND password = ?';
    const values = [login, password];
  
    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      if (data.length === 0) return res.json('Invalid login or password');
      const token = jwt.sign({ id: data[0].id, isAdmin: data[0].isAdmin },
         "mySecretKey",
         )
      return res.json({ 
        username: data[0].name,
        isAdmin: data[0].isAdmin,
        token
      });
    });
  };

  const getLogout = (req, res) => {
    // Usuń token z lokalnego przechowalnika
    res.clearCookie("token");
  
    // Zwróć odpowiedź HTTP 200 OK
    return res.sendStatus(200);
  };

  export { getRegister, getLogin, getLogout}