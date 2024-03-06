import React, { useState } from "react";
// import { getLoginSession } from "../../../../src/lib/auth";
// import { findUser } from "../../../../src/lib/user";
import { Router, useRouter } from "next/router";
import { toast } from "react-toastify";
import { getLoginSession } from "../../lib/auth";
import { findUser } from "../../lib/user";

export default function ChangePassword({ userDetails }) {
  const user = JSON.parse(userDetails);
  const router = useRouter();
  const [currentPassword, setcurrentPassword] = useState("test@123");
  const [newPassword, setnewPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  async function changePassword(e) {
    const body = {
      user: user,
      currentPassword: currentPassword,
      newPassword: newPassword,
    };
    try {
      if (newPassword === confirmPassword) {
        const res = await fetch("/api/auth/changePassword", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (res.status == 200) {
          toast.success("Password changed", {
            toastId: "Password changed",
          });
        } else {
          toast.error("Wrong Password ", {
            toastId: "Wrong Password ",
          });
        }
      } else {
        toast.error("Password not matched", {
          toastId: "Password not matched",
        });
      }
      // console.log("res", res);
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      // setLoading(false);
      // setErrorMsg(error.message);
      toast.error("error", {
        toastId: "error",
      });
    }

    setnewPassword("");
    setconfirmPassword("");
    router.push("/profile");
  }
  return (
    <div className="min-h-screen m-28">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Change Password
          </h3>
        </div>
      </div>

      <input
        type="password"
        name="newPassword"
        id="newPassword"
        placeholder="newPassword"
        value={newPassword}
        onChange={(e) => {
          setnewPassword(e.target.value);
        }}
      />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="confirmPassword"
        value={confirmPassword}
        onChange={(e) => {
          setconfirmPassword(e.target.value);
        }}
      />

      <button onClick={changePassword}>submit</button>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getLoginSession(req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;
  return {
    props: { userDetails: JSON.stringify(user) },
  };
};
