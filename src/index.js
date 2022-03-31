import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import saySomething from './my-other-file.js';
import sayHello from './my-other-file';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);  


console.log('Hello there wookie');

console.log(process.env.MY_SECRET);

sayHello();

