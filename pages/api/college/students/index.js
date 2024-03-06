// import Register from "../../model/Register";
// UserSche

// import dbConnect from "../../../../lib/dbConnect";
import dbConnect from "../../../../lib/dbConnect";
import Register from "../../../../model/Register";
import StudentDetails from "../../../../model/StudentDetails";

export default async function handler(req,res){

    // console.log("req",req.body.details);
    const students = req.body.details;
    const subjects = req.body.subjects;
    const college = req.body.collegeDetails
    const department = req.body.branch;
    const hod = req.body.hod
    const hash = "9d3683f7a48940beaac24865c5d35bc127d27f1ebc9c31de10b62d93eb1d15e828013c158464e985b41fbac72654a11c86502adaff15024566e2a66a9669a2ea"
    const salt = "6af5c3632b727b49dc36539b6c636cbd"
    await dbConnect()
    switch (req.method ){
        case("POST"):
            try{
                
            students.map(async (student)=>{
                const existingStudent = await Register.findOne({"email":student["College Mail ID"]})
                if(!existingStudent && student["College Mail ID"] != null){
                    const details = {
                        "email":student["College Mail ID"],
                        "username":student["College Mail ID"],
                        "hash":hash,
                        "salt":salt,
                        
                        profile:{
                            firstName:student["First Name"],
                            middleName:student["Middle Name"],
                            lastName : student["Last Name"],
                            dob:student["Date of Birth as per SSC (DD-MON-YYYY) /(DD/MM/YY)"],
                            gender:student["GENDER"],
                            verified:true,
                        },
                        phone:{
                            value:student["Student Mobile"],
                        },
                        rollNumber:{value:student["RollNo."]},
                        position:"student",
                        college:{
                            name:college.name,
                            code:college.code,
                            program:"BTECH",
                            specialisation:student["Branch"],
                            paraphrase:college.paraphrase
                        },
                        department:{
                            name:department,
                            code:"123"
                        },
                        studentSubjects:[{name:subjects[0]},{name:subjects[1]},{name:subjects[2]},{name:subjects[3]},{name:subjects[4]}],
                        mentorId:student["mentorId"],
                        hodId :hod
                    } 
                        await Register.create(details);
                        const user = await Register.findOne({"email":student["College Mail ID"]})
                        const studentSubjectDeails = {
                            "user":user?._id,
                            "studentSubjects":[{name:subjects[0]},{name:subjects[1]},{name:subjects[2]},{name:subjects[3]},{name:subjects[4]}]
                        }
                        console.log("student",studentSubjectDeails)
                        await StudentDetails.create(studentSubjectDeails)
                }
                else{
                    console.log("already exist")
                }
            })
        
            console.log("inside posted")
            res.send({"done":true})
        }
        catch(error){
            console.log("error",error)
            res.send({"error":error})
        }

            break

        case("DELETE"):
            const id = req.body.id
            await Iris.findOneAndDelete({"Id":id})
            console.log("deleted",id);
            res.send({"done":true})
            break 

        case("GET"):
            var data = await Register.find({})
            console.log("in find",data);
            res.send({"done":data})
    }
}