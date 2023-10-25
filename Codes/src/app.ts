import express from 'express';
import {DataBase} from './database/database'

const app = express();
const port = 3000;
const dataBase = new DataBase();

dataBase.createDataBase('disquaire')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});