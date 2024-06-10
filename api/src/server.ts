import express from 'express';
import { loggingMiddleware } from './middleware/logging';
import { databaseMiddleware } from './middleware/mongodb/dbMiddleware';
import { connectDB } from './middleware/mongodb/database';
import routes from './controllers';
import cors from 'cors';

export const app = express();

//connect to db
connectDB().catch(console.error);
app.use(databaseMiddleware);

//logging middleware
app.use(loggingMiddleware);

//setup cors
app.use(cors())

//setup routes
app.get('/healthcheck', function (req, res) {
    res.send('Hello World')
  })

app.use('/',routes)

app.listen(3000)