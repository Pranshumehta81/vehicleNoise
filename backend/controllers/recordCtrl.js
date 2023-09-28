const Records = require('../models/recordModel')

const recordCtrl = {
    getRecords:async(req,res)=>{
        try {
            // res.json({user_id:req.user.id})
            const records = await Records.find({user_id : req.user.id})
            res.json(records)
            // console.log(user_id)
            // console.log(req.user.id)

        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    },
    createRecord: async(req,res)=>{
        try {
            const {title,speedFHWA,AdditionalRemarks,date} = req.body;
           
            const newRecord = new Records({
                title,
                speedFHWA,
                AdditionalRemarks,
                date,
                user_id:req.user.id,
                name:req.user.name

            })
        
            await newRecord.save()
            res.json({msg:"Created  a records"})

            
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    },
    deleteRecord: async(req,res)=>{
        try {
            await Records.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a record"})
            
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

    },
    updateRecord: async(req,res)=>{
        try {
            const {title,  speedFHWA,
                AdditionalRemarks, date} =req.body;
            await Records.findByIdAndUpdate({_id:req.params.id},{
                title,
                speedFHWA,
                AdditionalRemarks,
                date
            }) 
            res.json({msg:"Records has been updated"})
            
        } catch (error) {
            return res.status(500).json({msg:err.message})
            
        }
    },
    getRecord: async(req,res)=>{
        try {
            const record = await Records.findById(req.params.id)
            res.json(record)
        } catch (error) {
            return res.status(500).json({msg:err.message})
             
        }
    }
   
}

module.exports = recordCtrl