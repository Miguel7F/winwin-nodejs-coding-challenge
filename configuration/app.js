import express from 'express' 
import cors from 'cors' 
import indexRouter from '../routes/indexRouter' 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(indexRouter);
export default app
