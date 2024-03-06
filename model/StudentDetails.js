import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user: { type: String },
    attendance:{type:Number},
    totalClasses:{type:Number},
    studentSubjects:[{
      name:{type:String},
      facultyName:{type:String},
      subjectAttendance:[{date:{type:Date},status:{type:Boolean},attendance:{type:Number}}],
      totalSubjectClasses:{type:Number}
    }]
  },
  { timestamps: true }
);

export default mongoose.models.studentDetails || mongoose.model("studentDetails", userSchema);