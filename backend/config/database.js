const mongoose = require('mongoose');

const connectDatabase = () =>{

    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then((x)=>{console.log(`DB connected on ${x.connection.host}`);})
}

module.exports = connectDatabase;   