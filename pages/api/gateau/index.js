import dbConnect from "../../../lib/mongo";
import gateau from "../../../model/gateau";

export default async function handler(req, res) {
    const {method} =req;
     dbConnect()
      if (method === "GET"){


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
  