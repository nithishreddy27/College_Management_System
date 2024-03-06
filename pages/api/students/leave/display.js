// import Register from "../../../model/Register"

import dbConnect from "../../../../lib/dbConnect";
import LeaveLetter from "../../../../model/LeaveLetter";

// import dbConnect from "../../../../lib/dbConnect";
// import Register from "../../../../model/Register";
// import StudentDetails from "../../../../model/StudentDetails";
// import facultyDetails from "../../../../model/facultyDetails";

export default async function handler(req, res){
    console.log('inside api')
    const b = req.body
    await dbConnect();
    const today = new Date()
    switch (req.method) {
        case "GET":
            const userId = req.query.userId;
            const index = req.query.index;

            console.log(userId)
            // const attendance = await StudentDetails.findOne({user:user})
            // console.log("in get attendancec",attendance)
            // // attendance.StudentDetails.studentSubjects
            const l = await LeaveLetter.findOne({"user":userId}) 
            console.log("letters in api",l);
            const letter = l.leaveLetters[index]
            
            res.status(200).send({data:letter})  
            break;
        
      }


    
} 