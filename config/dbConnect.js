const mongoose = require('mongoose');
const dbConnect=()=>{
    if(mongoose.connection.readyState>=1){
        return ;
    }
    mongoose.connect("mongodb://localhost:27017/bookit",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       
      
    }).then(c0on=>{
        console.log('connected to data base')
    })
}

module.exports= dbConnect; 