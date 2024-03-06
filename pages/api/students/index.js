import dbConnect from "../../../lib/dbConnect"
import Register from "../../../model/Register"

export default async function handler(req, res){

    await dbConnect()
    switch (req.method) {
        case "GET":
            console.log("in get");
            res.status(200).send({"done":"true"})
            break;
        case "POST":
            const college = req.body.college;
            const studentClass = req.body.studentClass;
            console.log("in api",studentClass,college)
            const students = await Register.find({"college.paraphrase":college,"department.name":studentClass,"position":"student"})
            console.log("students",students.length)
            res.status(200).send({students:students})
        // case "PUT":
        //         console.log("inside details") 
        //      try {
        //         // await connectDB();
        //         await dbConnect()
        //         const { id, status } = req.query;
        //         console.log("req",req.query)
        //         // console.log("id",id,"st0",status)
        //         const college = await Register.findOneAndUpdate(
        //           { _id: id },
        //           { approved: status },
        //           { new: true }
        //         );
            
        //         if (college) {
        //           return res.status(200).json({ message: "Status Updated", college });
        //         } else {
        //           return res.status(200).json({ message: "No Colleges available", colleges: [] });
        //         }
        //       } catch (error) {
        //         console.log(error)
        //         return res.status(500).json({ message: error.message });
        //       }
        //   break;
        // case "DELETE":
        //   await deleteRegisteredCollege(req, res);
        //   break;
      }


    
} 