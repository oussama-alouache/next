import  Mongoose  from "mongoose";
const OrderSchema = new Mongoose.Schema(
    
   { 
       customer:{
           type:String,
           required:true,
           maxlength:30,
       },

        adress :{
        type:String,
        required:true,
        maxlength:200,
        },

       total:{
        type:Number,
        required:true,
        
         },

       statuts:{
        type:Number,
        default:0,
    
         },

      method:{
            type:Number,
            required:true,
        
        },
           
       

   },
   {timestamps:true},

);
export default Mongoose.models.Order|| Mongoose.model("Order",OrderSchema);
