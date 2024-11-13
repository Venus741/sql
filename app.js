import express from 'express';
import mysql from 'mysql2/promise';
import helmet from 'helmet';

const app = express();
app.use(
    helmet({
        contentSecurityPolicy: false,
        xDownloadOptions: false,
      }),
);
const porta = 3000;

let connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'lugares'
});

try {
    // console.log('funcioanndo: ', connection);
} catch (error) {
    console.error("erro", error);
}

app.get('/pessoa/:nome',  async function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    let nome = req.params.nome;
    console.log('nome: ', nome)
    const pessoa = await connection.query(`select * from teste where nome like '%${nome}%'`);
    res.json(pessoa[0]);
});

app.listen(porta, () => {
    console.log('Server is running on port ', porta)
});