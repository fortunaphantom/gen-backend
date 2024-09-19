
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import compression from 'compression';
import cors from 'cors';
import Moralis from "moralis";
import { errorConverter, errorHandler } from './middlewares/error';
import routes from './routes';

// For env File 
dotenv.config();

const app: Application = express();
const port = 4000;

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.use('/api', routes);

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
