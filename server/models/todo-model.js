const mongoose =require('mongoose');
const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    }
});

// const taskSchema = new Schema({
//     username:{
//         type: String,
//         required: true,
//     },
//     pass:{
//         type:varchar,
//         required: true,
//     }
// })
module.exports=mongoose.model("ToDo",todoSchema)