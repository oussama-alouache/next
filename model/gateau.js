import  Mongoose  from "mongoose";
const GateauSchema = new Mongoose.Schema(
    
   { 
       title:{
           type:String,
           required:true,
           maxlength:30,
       },

        desc :{
        type:String,
        required:true,
        maxlength:200,
        },

       img:{
        type:String,
        required:true,
        
         },

       prices:{
        type:[Number],
        required:true,
    
          },
        

   },
   {timestamps:true},

);
export default Mongoose.models.Gateau|| Mongoose.model("Gateau",GateauSchema);
