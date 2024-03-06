// import Register from "../../../model/Register"

// import dbConnect from "../../../../lib/dbConnect";
// import LeaveLetter from "../../../../model/LeaveLetter";
import dbConnect from "../../../lib/dbConnect";
import Circular from "../../../model/Circular";

// import dbConnect from "../../../../lib/dbConnect";
// import Register from "../../../../model/Register";
// import StudentDetails from "../../../../model/StudentDetails";
// import facultyDetails from "../../../../model/facultyDetails";

export default async function handler(req, res){
    const b = req.body
    await dbConnect();

    switch (req.method) {
        case "GET":
            const cno = req.query.cno;
            console.log(cno)
            const circular = await Circular.find({fileNumber:cno}) 
            res.status(200).send({data:circular})
            break;
        case "POST":
            
            res.status(200).send({done:true})

           break;
        case "PUT":
           
            res.send({done:true})
            break
            
    }

    
} 