const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    speedFHWA:{
        type:Number,
        require:true
    },
    AdditionalRemarks:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    user_id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    }
},
    {
        timestamps:true
})

module.exports = mongoose.model('Records',recordSchema)
