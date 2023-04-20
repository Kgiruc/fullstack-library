import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'karol_giruc',
    database: 'library'
});

app.use(express.json())

db.query("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'karol_giruc'", (err, result) => {
    if (err) throw err;
    console.log("User altered");
});

app.get('/', (req, res) => {
    res.json('hello backend')
});

app.get('/books', (req, res) => {
    const q = "SELECT * FROM library.books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO library.books (`title`,`ISBN`,`author`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.ISBN,
        req.body.author,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("book has been creacted successfully");
    });
});

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id
    const q = "DELETE FROM library.books WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("book has been deleted successfully");
    });
})

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id
    const q = "UPDATE library.books SET `title` = ?,`ISBN` = ?,`author` = ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.ISBN,
        req.body.author,
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("book has been updated successfully");
    });
})

app.listen(8800, () => {
    console.log('Server started on port 8800');
});