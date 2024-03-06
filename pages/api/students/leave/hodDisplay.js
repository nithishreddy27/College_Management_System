// import Register from "../../../model/Register"

import dbConnect from "../../../../lib/dbConnect";
import LeaveLetter from "../../../../model/LeaveLetter";

// import dbConnect from "../../../../lib/dbConnect";
// import Register from "../../../../model/Register";
// import StudentDetails from "../../../../model/StudentDetails";
// import facultyDetails from "../../../../model/facultyDetails";

export default async function handler(req, res){
    const b = req.body
    await dbConnect();
    const today = new Date()
    switch (req.method) {
        case "GET":
            const userId = req.query.userId;
            console.log(userId)
            // const attendance = await StudentDetails.findOne({user:user})
            // console.log("in get attendancec",attendance)
            // // attendance.StudentDetails.studentSubjects
            const l = await LeaveLetter.find({"leaveLetters.hodId":userId}) 
            // const letters =[]
            // l.map((le)=>{
            //     le.leaveLetters.map((letter)=>{
            //     // console.log("le",letter.to, userId)

            //         if(le.to === userId){
            //             console.log("onsode");
            //             letters.push(letter)
            //         } 
            //     })
            // })

            // console.log('let',letters)
            res.status(200).send({data:l})
            break;
        case "PUT":
            const uId = b.userId
            const index = b.index
            console.log("in put in hod",b)
        
            if(b.status == "approve"){
                const letter = await LeaveLetter.findOne({user:uId})
                letter.leaveLetters[index].hodApproved = true;
                await letter.save();
                console.log("letter",letter)
            }
            res.send({done:true})
            break
            
    }


    
} 