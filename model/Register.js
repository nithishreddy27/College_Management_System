import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, unique: true },
    username: { type: String, trim: true, unique: true },
    hash: { type: String },
    salt: { type: String },
    profile: {
      firstName: {
        type: String,
        trim: true,
      },
      lastName: {
        type: String,
        trim: true,
      },
      image: {
        type: String,
        default:
          "http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png",
      }
    },
    phone: {
      value: {
        type: Number,
      },
     
    },
    approved: {
      type: Boolean,
    },
    rollNumber: {
      value: {
        type: String,
        trim: true,
        uppercase: true,
      },
    },
    position:{
      type:String,
    },
    college: {
      name: {
        type: String,
      },
      code: {
        type: String,
      },
      campus: {
        type: String
      },
      program: {
        type: String,
      },
      specialisation: {
        type: String
      },
      paraphrase: {
        type: String,
      }
    },
    department:{
      name: {
        type: String,
      },
      code: {
        type: String,
      },
    },
    lab:{
      name:{type:String},
      number:{type:Number}
    },
    facultySubjects:[{
      name:{type:String},
      class:{type:String},
    }],
    mentorId:{
      type:String
    },
    hodId:{
      type:String
    }
    
  },
  { timestamps: true }
);

export default mongoose.models.users || mongoose.model("users", userSchema);