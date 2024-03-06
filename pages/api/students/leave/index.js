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
            const l = await LeaveLetter.find({"leaveLetters.to":userId}) 
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
        case "POST":
            console.log("hod id",b.hodId)
            const object = {
                user : b.userId,
                leaveLetters:[{
                    name:b.name,
                    rollNumber:b.rollnumber,
                    department:b.department,
                    date:today,
                    to:b.mentorId,
                    subject:b.subject,
                    salutation:b.salutation,
                    letterBody:b.letterbody,
                    mentorApproved:false,
                    hodApproved:false,
                    hodId:b.hodId
                }]
            }
            const letter = {
                name:b.name,
                rollNumber:b.rollnumber,
                department:b.department,
                date:today,
                to:b.mentorId,
                subject:b.subject,
                salutation:b.salutation,
                letterBody:b.letterbody,
                mentorApproved:false,
                hodApproved:false,
                hodId:b.hodId
            }
            console.log("inside post",b)

            const user = await LeaveLetter.findOne({user:b.userId})
            if(user){
                console.log("user in api",user)
                await LeaveLetter.findOneAndUpdate({user:b.userId},{$push:{leaveLetters:letter}})
            }
            else{
                console.log("inside new object")
                await LeaveLetter.create(object);
            }
            res.status(200).send({done:true})

           break;
        case "PUT":
            const uId = b.userId
            const index = b.index
            console.log("in put",b)
        
            if(b.status == "approve"){
                const letter = await LeaveLetter.findOne({user:uId})
                letter.leaveLetters[index].mentorApproved = true;
                await letter.save();
                console.log("letter",letter)
            }
            res.status(200).send({done:true})
            break
            
    }


    
} 