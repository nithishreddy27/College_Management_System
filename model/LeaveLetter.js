import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user: { type: String },
    leaveLetters:[{
        name:{type:String},
        rollNumber:{type:String},
        department:{type:String},
        date : {type:Date},
        to:{type:String},
        subject:{type:String},
        salutation:{type:String} ,
        letterBody:{type:String},
        mentorApproved:{type:Boolean},
        hodApproved:{type:Boolean},
        hodId:{type:String}
    }]
  },
  { timestamps: true }
);

export default mongoose.models.leaveLetter || mongoose.model("leaveLetter", userSchema);