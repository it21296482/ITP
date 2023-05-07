const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    DoctorName:{
        type:String,
        required:true
    },
    Age:{
        type:String,
        requred:true
    },
    Specialization:{
         type:String,
         required:true
    },
    Mobile:{
        type:String,
        required:true
   },
   DoctorFee:{
    type:String,
    required:true
},
    Password:{
    type:String,
    required:true
}
});

module.exports = mongoose.model('Posts',postSchema);