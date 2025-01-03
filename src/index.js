import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import route from './routes/index.js';
import db from './config/db/index.js';

const app = express();
const port = 8000;
db.connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
