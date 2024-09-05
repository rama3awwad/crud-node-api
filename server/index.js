import express from 'express';
import { connection } from './postgres/postgres.js';
import router from './view/routes.js';
import cors from 'cors';
import multer from 'multer';

const app = express();
const PORT = 8000;
const upload = multer();

app.use(express.json());
app.use(cors());
app.use(upload.none());

app.use(router);

connection();

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
});


