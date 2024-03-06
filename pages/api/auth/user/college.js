import dbConnect from "../../../../lib/dbConnect";
import Register from "../../../../model/Register";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await searchUserDetails(req, res);
      break;
    case "POST":
      await createUserDetails(req, res);
      break;
    case "PUT":
      await updateUserDetails(req, res);
      break;
  }
}

const searchUserDetails = async (req, res) => {
  try {
    await dbConnect();
    const collegeCode = req.query.collegeCode;
    console.log("college api",req.query)
    const details = await Register.find({ "college.paraphrase": collegeCode ,"position":"faculty","department.value":req.query.branch});
    console.log('details',details.length)
    if (details) {
      return res.status(200).json({ message: "Details Found", details });
    } else {
      return res
        .status(200)
        .json({ message: "Details not found", details: undefined });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUserDetails = async (req, res) => {
  try {
    await dbConnect();

    const oldEntry = await Register.findOne({ email: req.body.email });

    if (oldEntry) {
      return res
        .status(500)
        .json({ message: "User Already Exists", details: oldEntry });
    }

    const details = new User(req.body);
    await details.save();

    if (details) {
      return res.status(200).json({ message: "User Created", details });
    } else {
      return res
        .status(200)
        .json({ message: "Please try again.", details: undefined });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUserDetails = async (req, res) => {

  try {
    await dbConnect();

    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    if (req.body.category === "student" && req.body.rollNumber) {
      const oldRollnumberEntry = await Register.findOne({
        "rollNumber.value": req.body.rollNumber.value,
      });
      if (oldRollnumberEntry)
        return res.status(500).json({ message: "Roll Number Already Exists" });
    }

    const details = await Register.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
    });
    console.log('usrr id',req.body)

    if (details) {
      return res.status(200).json({ message: "Details Updated", details });
    } else {
      return res.status(400).json({ message: "Please try again!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
