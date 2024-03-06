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



    // const today = new Date()
    switch (req.method) {
        case "GET":
            const userId = req.query.userId;
            console.log(userId)
            const circulars = await Circular.find({postedBy:userId}) 
            res.status(200).send({data:circulars})
            break;
        case "POST":
            const object = {
                collegeCode:b.collegeCode,
                department:b.department,
                postedBy:b.postedBy,
                fileNumber:b.circularFileNumber,
                circularBody:b.circularBody,
                copyTo:b.pos
            }
            console.log("body in api",object)

            await Circular.create(object);
            res.redirect("/profile/hod/circular")
            // res.status(200).send({done:true})

           break;
        case "PUT":
            // const uId = b.userId
            // const index = b.index
            // console.log("in put",b)
        
            // if(b.status == "approve"){
            //     const letter = await LeaveLetter.findOne({user:uId})
            //     letter.leaveLetters[index].mentorApproved = true;
            //     await letter.save();
            //     console.log("letter",letter)
            // }
            res.send({done:true})
            break
            
    }

    
} 