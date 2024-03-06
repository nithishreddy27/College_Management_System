import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    collegeCode:{type:String},
    department:{type:String},
    fileNumber:{type:String},
    circularBody:{type:String},
    copyTo:[{type:String}],
    postedBy:{type:String},
    approved:{type:Boolean}
  },
  { timestamps: true }
);

export default mongoose.models.circular || mongoose.model("circular", userSchema);