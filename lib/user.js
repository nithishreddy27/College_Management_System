import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import dbConnect from "./dbConnect"
import Register from "../model/Register"

export async function createUser({ username, password , position }) {

  const email = username
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    email,
    username,
    hash,
    salt,
    position
  } 
  console.log("user in create",user)
  await dbConnect()
  await Register.create(user)
  return { username, createdAt: Date.now() }
}

export async function findUser({ username }) {
  await dbConnect()
  try{  
    var user=await Register.findOne({"username":username})
    // console.log("user",user)
    return user
  }
  catch(error){
    return {"error":error}
  }
}

export async function addDetails(b){  

  const newObj = Object.assign({},b,{profile:{
    firstName:b.firstName,
    middleName:"some",
    lastName: b.lastName,
    gender:b.gender,
    dob:new Date(),
    image:"link",
    verified:true,
    frozen:false
  },
  approved:false,
  phone:{
    value:b.phone
  },rollNumber:{
    value:b.rollnumber
  },college:{
    name:b.college,
    paraphrase:b.paraphrase,
  }
})

var finalObject = newObj
console.log('new obj',newObj);
if(b.position == "hod"){
  const tempObj = {
    department:b.branch
  }
  finalObject = {...newObj , ...tempObj}
}
  console.log("inside add",finalObject)
  await dbConnect()
  try{
      var res
      if(finalObject.email){

        res = await Register.findOneAndUpdate({"username":finalObject.email},{$set:finalObject},{new:true})
      }
      else{
        res = await Register.findOneAndUpdate({"username":finalObject.username},{$set:finalObject},{new:true})
      }
      await res.save()
      console.log("response",res);
      return {"sucess":true}
  }
  catch(error){
    console.log("response error",error);

      return {"error":error}
    }
}



export async function addEducation(b){  
  console.log("in add user",b.username)


  const newObj = Object.assign({},b,{college:{
    name:b.school,
    campus:b.board,
    program:b.degree,
    code:"",
    specialisation:b.branch,
  },
  // paraphrase:b.paraphrase,
  // website:b.collegeWebsite,
  // principal:{email:b.principalemail,phone:b.principalphone},
  // placement:{designation:b.designation,email:b.placementemail,phone:placementphone}
})
  await dbConnect()
  try{
      var res = await Register.findOneAndUpdate({"username":b.username},{$set:newObj},{new:true})
      await res.save()
      // console.log("in add",res)
      return {"sucess":true}
  }
  catch(error){
      return {"error":error}
    }
}

export function validatePassword(user, inputPassword) {


  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}