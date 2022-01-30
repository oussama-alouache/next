import  Mongoose  from "mongoose";
const BoisonSchema = new Mongoose.Schema(
    
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
        extraoption:{
            type:[
                {
                    text:{ type:String ,required:false},
                    price:{ type:Number ,required:false},


                },

            ],

        },
   


   },
   {timestamps:true},

);
export default Mongoose.models.Boison|| Mongoose.model("Boison",BoisonSchema);
