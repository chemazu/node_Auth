const express=  require ('express') 
const cors  = require('cors')
const  mongoose  = require('mongoose')
const register = require("./routes/register")

const app = express();
const PORT = process.env.PORT || 5000
const db =require("./config/keys").mongoURI

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>console.log("mongo Running")).catch(err=>{console.log(err)})


app.use('/auth',register)
app.listen(
    PORT,
    // console.log(`server running in ${process.env.NODE_ENV} mode in port ${P0RT}`)
    console.log("server up")
  );  