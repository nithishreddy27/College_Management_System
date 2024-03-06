import dbConnect from "../../../lib/dbConnect"
import Register from "../../../model/Register"

export default async function handler(req, res){

    
    switch (req.method) {
        case "GET":
            await dbConnect()
            console.log("inside")
            const data = await Register.find({"position":"collegeAdmin"})
            res.status(200).send(data)
            break;
        case "PUT":
                console.log("inside details")
                
            try {
                // await connectDB();
                await dbConnect()
                const { id, status } = req.query;
                console.log("req",req.query)
                // console.log("id",id,"st0",status)
                const college = await Register.findOneAndUpdate(
                  { _id: id },
                  { approved: status },
                  { new: true }
                );
            
                if (college) {
                  return res.status(200).json({ message: "Status Updated", college });
                } else {
                  return res.status(200).json({ message: "No Colleges available", colleges: [] });
                }
              } catch (error) {
                console.log(error)
                return res.status(500).json({ message: error.message });
              }
          break;
        case "DELETE":
          await deleteRegisteredCollege(req, res);
          break;
      }


    
} 