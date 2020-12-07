import express from 'express'
import colors from 'colors'
import cors from 'cors'
import connectDb from './utils/connectDb.js'
import posts from './routes/posts.js'
import users from './routes/users.js'
import upload from './routes/imageupload.js'
import path from 'path'

const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors());

app.use('/api/posts' , posts);
app.use('/api/upload' , upload );
app.use('/api/users' , users );

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname )))


app.listen(5000 , () => {
    console.log('SERVER STARTED SUCCESSFULLY ON PORT 5000'.yellow.underline.bold)
})