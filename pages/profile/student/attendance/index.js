import React from "react";
import { getLoginSession } from "../../../../lib/auth";
import { findUser } from "../../../../lib/user";
import crypto from "crypto";
import axios from "axios";
import Navbar from "../../../../components/Navbar";

export default function Index({ userDetails, attendanceDetails }) {
  const user = JSON.parse(userDetails);
  // console.log("user",user)
  const attendance = JSON.parse(attendanceDetails).attendance;
  // console.log('a',attendance)
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="mt-[14vh] mx-14 my-5">
          <p className="font-serif text-2xl font-semibold text-violet-900 ">
            SUBJECT-SPECIFIC ATTENDANCE
          </p>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3 rounded-l-lg">
                  Subject name
                </th>
                <th scope="col" className="px-4 py-3">
                  Total Number of Classes
                </th>
                <th scope="col" className="px-4 py-3">
                  Total Number of Classes Attended
                </th>
                <th scope="col" className="px-4 py-3">
                  Percentage
                  </th>
              </tr>
            </thead>
            <tbody className="border">
              {attendance.studentSubjects.map((subject) => (
                <tr className="bg-white dark:bg-gray-800" key={subject.name}>
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {subject.name}
                  </th>
                  {subject.totalSubjectClasses && (
                    <td className="px-4 py-4">
                      {subject.totalSubjectClasses}{" "}
                    </td>
                  )}
                  {!subject.totalSubjectClasses && (
                    <td className="px-4 py-4">
                      0
                    </td>
                  )}
                  {subject.subjectAttendance && (
                    <td className="px-4 py-4">
                      {/* {console.log(subject.subjectAttendance[subject.subjectAttendance.length - 1])} */}
                      {
                      subject.subjectAttendance[
                        subject.subjectAttendance.length - 1
                      ]?.attendance
                    }
                    </td>
                  )}
                 
                  

                  {/* {subject.totalSubjectClasses && (
                    <td className="px-4 py-4">
                      {
                        subject.subjectAttendance[
                          subject.subjectAttendance.length - 1
                        ]?.attendance
                      }
                    </td>
                  )} */}
                  {subject.totalSubjectClasses && (
                    <td className="px-4 py-4">
                    {(subject.subjectAttendance[
                      subject.subjectAttendance.length - 1
                    ]?.attendance /
                      subject.totalSubjectClasses) *
                      100} %
                    </td>
                  )}
                  {!subject.totalSubjectClasses && (
                    <td className="px-4 py-4">
                    0 %
                    </td>
                  )}


                </tr>
              ))}
            </tbody>
            {/* <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3"> </td>
            </tr>
        </tfoot> */}
          </table>

          {/* {attendance.studentSubjects.map((subject) => (
            <div key={subject.name}>
              
              <p className="text-xl font-bold ">{subject.name}</p>
              {subject.subjectAttendance && (
                <>
                  <div>
                    Total number of classes attednded ={" "}
                    {
                      subject.subjectAttendance[
                        subject.subjectAttendance.length - 1
                      ]?.attendance
                    }
                  </div>
                </>
              )}
              {subject.totalSubjectClasses && (
                <div>
                  <div>
                    TOtal number of classes = {subject.totalSubjectClasses}
                  </div>
                  <p>
                    Attendance ={" "}
                    {(subject.subjectAttendance[
                      subject.subjectAttendance.length - 1
                    ]?.attendance /
                      subject.totalSubjectClasses) *
                      100}{" "}
                    %
                  </p>
                </div>
              )}

             
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getLoginSession(req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;
  const data = JSON.stringify(user);
  const attendanceDetails = await axios.get(
    `http://localhost:3000/api/students/attendance?userId=${user?._id}`
  );
  // console.log("attendancce",attendanceDetails.data)
  const attendance = JSON.stringify(attendanceDetails.data);

  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  if (user) {
    const inputHash = crypto
      .pbkdf2Sync("test@123", user.salt, 1000, 64, "sha512")
      .toString("hex");
    const passwordsMatch = user.hash === inputHash;
    if (passwordsMatch) {
      // console.log(" first first first", user);
      return {
        redirect: {
          destination: "/auth/changePassword",
          permanent: false,
        },
      };
    }
  }
  if (user.position !== "student") {
    return {
      redirect: {
        destination: `/profile/${user.position}`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      userDetails: data,
      attendanceDetails: attendance,
    },
  };
};
