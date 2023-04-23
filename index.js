import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import apiRouter from './routes/api.js';

const app = express();
const port = 3080;

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set('jwt', "ebeb1a5ada5cf38bfc2b49ed5b3100e0");

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res, next) => {
  if (req.originalUrl === '/api/stripe/webhook') {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

//app.use(express.static(__dirname + '/build'));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../my-app/build/index.html'));
});

app.listen(port, () => {
  console.log(`Personifyco app listening on port ${port}`);
});
