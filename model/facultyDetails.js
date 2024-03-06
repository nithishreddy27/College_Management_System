import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user:{type:String},
    facultySubjects:[{
      name:{type:String},
      class:{type:String},
      code:{type:String}
    }],
  },
  { timestamps: true }
);

export default mongoose.models.facultyDetails || mongoose.model("facultyDetails", userSchema);