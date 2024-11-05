const mongoose=require('mongoose');

const companySchema=mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    description:{
        type:String
    },
    website:{
        type:String
    },
    location:{
        type:String
    },
    logo:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true});
const Company=mongoose.model('Company',companySchema);
module.exports=Company;