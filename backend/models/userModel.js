const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type :String , 
        required :true
    },
    emaill :{
        type :String , 
        required :true
    },
    password :{
        type :String , 
        required :true
    }
},{
    timestamps : true
});

const user = mongoose.model('User',userSchema);
module.exports = user;