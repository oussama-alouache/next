import dbConnect from "../../../lib/mongo";
import gateau from "../../../model/gateau";

export default async function handler(req, res) {
    const {method , query:{id}          } =req;
     dbConnect()
      if (method === "GET"){
        try {
            const product = await gateau.findById(id);
            res.status(200).json(product);
  
  
  
  
        } catch (error) {
            res.status(500).json(error);
            


      }
    }
    if (method === "PUT"){
        try {
            const Gateau = await gateau.find();
            res.status(200).json(Gateau);
  
  
  
  
        } catch (error) {
            res.status(500).json(error);
            


      }
    }
    if (method === "DELETE"){
        try {
            const Gateau = await gateau.find();
            res.status(200).json(Gateau);
  
  
  
  
        } catch (error) {
            res.status(500).json(error);
            


      }
    }



      if (method === "POST"){
      try {
          const Gateau = await gateau.create(req.body);
          res.status(201).json(Gateau);




      } catch (error) {
          res.status(500).json(error);
          
      }
         
      }





  }
  