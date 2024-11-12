import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const porta = 3000;

let connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'lugares'
});

try {
    // console.log('funcioanndo: ', connection)
} catch (error) {
    console.error("erro", error)
}

app.get('/',  async function(req, res) {
    const pessoa = await connection.query("select * from teste");
    res.json(pessoa[0])
})

app.listen(porta);