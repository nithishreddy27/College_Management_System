import dbConnect from "../../../lib/dbConnect";
import { validatePassword } from "../../../lib/user";
import crypto from "crypto";
import Register from "../../../model/Register";

export default async function handler(req, res) {
  const user = req.body.user;
  var validate = validatePassword(user, req.body.currentPassword);
  if (validate) {
    console.log("correct user");
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(req.body.newPassword, salt, 1000, 64, "sha512")
      .toString("hex");
    console.log("hash", req.body.user);
    await dbConnect();
    var done = await Register.findOneAndUpdate(
      { _id: user._id },
      { salt: salt, hash: hash },
      {
        new: true,
      }
    );

    res.status(200).send("success");
  } else {
    console.log("invalid user");
    res.status(500).send({ password: false });
  }
}
