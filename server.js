import express from "express"
import mongoose from "mongoose"
import Post from "./dbPosts.js"
import Cors from "cors"

//App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:nEnacOnvUWAe7ErP@cluster0.su0ev.mongodb.net/calmdb?retryWrites=true&w=majority';

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//API endpoints
app.get("/",(req, res)=> res.status(200).send("Hello world"));

app.post('/posts', (req, res)=>{
    const dbPost = req.body;

    Post.create(dbPost, (err, data)=>{
        if(err){
            res.status(500).send(err);
        } else{
            res.status(201).send(data);
        }
    })
});

app.get('/posts', (req, res)=>{
    const dbPost = req.body;

    Post.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        } else{
            res.status(200).send(data);
        }
    })
});

//Listener
app.listen(port, ()=>console.log('listening on localhost: ${port}'));