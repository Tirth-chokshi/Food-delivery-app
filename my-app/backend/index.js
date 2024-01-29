import express from 'express'
import {mongoDB} from "./db.js";
import NewUser from "./Routes/NewUser.js";

const PORT = 5000;  
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.json())

app.use('/api',NewUser)

app.get('/',(req,res)=>{
    res.send("Helow")
})
mongoDB().then(()=> {

    app.listen(PORT , ()=>{
        console.log(`Server is listening to port ${PORT}. `)
    })
     
})