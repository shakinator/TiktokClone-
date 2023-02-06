import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import Videos from './dbModel.js' 

// app config  
const app = express();
const port = 9000;

//middleware
//it will pass the response as a json object  
app.use(express.json())
//whenever we recieve a request we will set the headers to the mentioned below , * means all   
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()    
})

// DB config
//const connection_url = 'mongodb+srv://saksham:<saksham12g>@cluster0.3oyspzf.mongodb.net/tiktok?retryWrites=true&w=majority';
const connection_url = "mongodb+srv://saksham:saksham12g@cluster0.3oyspzf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true
})
mongoose.set('strictQuery', true );
// api endpoints 
app.get("/", (req, res) => res.status(200).send('hello world'));
//if someone is accesing my root folder using get method then this line of code will change the response status to 200(means ok) and send back hello world

app.get('/v1/posts', (req, res) => res.status(200).send(data));

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err)
        {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req, res) => {
    //POST request is to add data to the database
    // it will let us add a video Document to the videos collection
    const dbVideos = req.body;
 
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(201).send(data);
        }
    });
});

// listener 
app.listen(port, () => console.log(`listening of localhost: ${port}`)); // this string concatenation at the end can only be done using back tick(`) not single quote or double quote
