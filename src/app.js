import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from './routes/userRoutes.js';

dotenv.config();

const app = express();


// middleware
app.use(express.json());

// mongodb connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_CONNECTION)
  .then((result) => app.listen(3005, () => console.log('Server running at http://localhost:3005')))
  .catch((err) => console.log(err));

// routes
app.use(router);

