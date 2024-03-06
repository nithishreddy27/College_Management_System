import React from "react";

const CircularSidebar = () => {
  return (
    <div className="  sticky bg-white overflow-hidden">
      <div className=" bg-gray-800 text-white   ">
        <div className="p-[4%] text-white ">
          <p className="text-white text-center font-bold text-[25px] tracking-wide">
            Enter Details
          </p>
          <div className="py-3 px-7">
            <div className="py-2">
              <p className="text-zinc-400 text-[10px]">FILE NUMBER</p>
              <input
                type="text"
                className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                placeholder="F.No.CVR/29/May /2023/201"
              />
            </div>
            <div className="py-2">
              <p className="text-zinc-400 text-[10px]">DATE </p>
              <input
                type="date"
                className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
              />
            </div>
            <div className="py-2 ">
              <p className="relative">
                <span className="text-zinc-400 text-[10px]">BODY</span>
                <span className="text-[10px] text-zinc-400 absolute right-0 bottom-1">
                  1/500 CHARACTERS
                </span>
              </p>
              <textarea
                type="textarea"
                className="bg-white w-full h-[165px]  text-sm p-3 my-[2px] rounded-md "
                placeholder="350 Characters only"
                maxLength={350}
              />
            </div>
            <div className="py-2">
              <p className="text-zinc-400 text-[10px]">COPY TO</p>

              <div>
                <input
                  className="w-4 h-4 rounded focus:ring-1 "
                  type="checkbox"
                  name="director"
                  value="Director"
                />
                <label className="text-white px-2 font-mono  tracking-wide">
                  DIRECTOR
                </label>
              </div>
              <div>
                <input
                  className="w-4 h-4 rounded focus:ring-1 "
                  type="checkbox"
                  name="vicePrincipal"
                  value="Vice-Principal"
                />
                <label className="text-white px-2 font-mono  tracking-wide">
                  Vice-Principal
                </label>
              </div>
              <div>
                <input
                  className="w-4 h-4 rounded focus:ring-1 "
                  type="checkbox"
                  name="deans"
                  value="All Deans"
                />
                <label className="text-white px-2 font-mono  tracking-wide">
                  All Deans
                </label>
              </div>
              <div>
                <input
                  className="w-4 h-4 rounded focus:ring-1 "
                  type="checkbox"
                  name="associateDeans"
                  value="AssociateDeans"
                />
                <label className="text-white px-2 font-mono  tracking-wide">
                  All Associate Deans
                </label>
              </div>
              <div>
                <input
                  className="w-4 h-4 rounded focus:ring-1 "
                  type="checkbox"
                  name="allHoDs"
                  value="All HoDs"
                />
                <label className="text-white px-2 font-mono  tracking-wide">
                  All HoDs
                
                </label>
              </div>
              <div>
                <input
                  className="w-4 h-4 rounded focus:ring-1 "
                  type="checkbox"
                  name="placementOfficer"
                  value="PlacementOfficer"
                />
                <label className="text-white px-2 font-mono  tracking-wide">
                  Placement officer
                </label>
              </div>
              <div>
                <input
                  className="w-4 h-4 rounded focus:ring-1 "
                  type="checkbox"
                  name="chairman"
                  value="Chairman"
                />
                <label className="text-white px-2 font-mono  tracking-wide">
                  Chairman
                </label>
              </div>
              <div>
                <input
                  className="w-4 h-4 rounded focus:ring-1 "
                  type="checkbox"
                  name="advisor"
                  value="Advisor"
                />
                <label className="text-white px-2 font-mono  tracking-wide">
                  Advisor
                </label>
              </div>
              <div>
                <input
                  className="w-4 h-4 rounded focus:ring-1 "
                  type="checkbox"
                  name="students"
                  value="Students"
                />
                <label className="text-white px-2 font-mono  tracking-wide">
                  All Students
                
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularSidebar;
