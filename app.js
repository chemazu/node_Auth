const express=  require ('express') 
const cors  = require('cors')
const  mongoose  = require('mongoose')
const bodyParser = require('body-parser')
const register = require("./routes/register")

const app = express();
const PORT = process.env.PORT || 5000
const db =require("./config/keys").mongoURI

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>console.log("mongo Running"))
.catch(err=>{console.log(err)})


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth',register)

app.listen(
    PORT,
    console.log("server up")
  );  