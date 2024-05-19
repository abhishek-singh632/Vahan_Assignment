const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'entitydb'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Create entity table if not exists
db.query(`CREATE TABLE IF NOT EXISTS entities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    mobileNumber VARCHAR(255),
    dateOfBirth DATE
)`, (err, result) => {
    if (err) throw err;
    console.log('Entity table created or exists...');
});

// Add entity
app.post('/add-entity', (req, res) => {
    const { name, email, mobileNumber, dateOfBirth } = req.body;
    db.query('INSERT INTO entities (name, email, mobileNumber, dateOfBirth) VALUES (?, ?, ?, ?)', 
    [name, email, mobileNumber, dateOfBirth], (err, result) => {
        if (err) throw err;
        res.send({ success: true, id: result.insertId });
    });
});

// Get all entities
app.get('/entities', (req, res) => {
    db.query('SELECT * FROM entities', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Update entity
app.put('/update-entity/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, mobileNumber, dateOfBirth } = req.body;
    db.query('UPDATE entities SET name = ?, email = ?, mobileNumber = ?, dateOfBirth = ? WHERE id = ?', 
    [name, email, mobileNumber, dateOfBirth, id], (err, result) => {
        if (err) throw err;
        res.send({ success: true });
    });
});

// Delete entity
app.delete('/delete-entity/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM entities WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.send({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
