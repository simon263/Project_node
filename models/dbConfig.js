const mongoose = require('mongoose');
// permet la connection a la base de donnée
mongoose.connect("mongodb://localhost:27017/animes", {useNewUrlParser: true ,useUnifiedTopology:true},
// on test la connection
(err) =>{
    if(!err) console.log("mongodb connected");
    else console.log("connection error:" +err);
}


)