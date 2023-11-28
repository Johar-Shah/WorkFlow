export default function  ProjectView()
{
  return (
    <>
      {/* <section className="flex flex-col items-start flex-shrink-0 w-auto h-auto border-2 rounded-sm border-inherit bg-white gap-2 p-3"> */}
      <section className="">
        <div className="flex items-center gap-2.5 self-stretch flex-1 w-full h-14 ">
          <p className="text-black font-segoe-ui text-lg font-semibold leading-10">
            Project Overview
          </p>
        </div>
        <div className="bg-slate-200 w-full h-[0.5px]"></div>
        <section className="flex items-center ">
          {/* 👇 DashBoard Section 2 ALL Project Graphs  */}
          <div className=" flex flex-row items-center justify-between flex-1 self-stretch ">
            {/* Project and select bar */}
            <div className="flex items-center justify-center flex-row   gap-8 w-64 h-14 ">
              <div
                className="flex flex-col  items-center  self-stretch gap-2.5 p-2 pb-0 
               flex-1 "
              >
                <p
                  className="text-blue-500 font-roboto text-1rem font-medium leading- 
               1.5rem  "
                >
                  All Projects
                </p>
                <div className="bg-blue-500 w-20 h-1"></div>
              </div>
              {/* select downDrop */}
              <div className="flex w-24 h-8 px-4 py-4 items-center justify-start  g shadow-md  rounded-md border-solid  bg-slate-100">
                {/* <p
                  className="flex flex-row justify-center items-center  gap-2 text- 
                   slate-400  text-base font-normal tracking-normal 
                 leading-relaxed"
                >
                  Select{" "}
                  <span className="w-3.5 h-3 pr-1 flex flex-shrink-0">
                    <img src="/Images/downarrow.svg" />
                  </span>
                </p> */}
                <select
                  className="flex flex-row justify-center items-center  gap-2 text- 
                   slate-400  text-base font-normal tracking-normal 
                 leading-relaxed bg-slate-100  text-slate-500"
                >
                  <option className="w-3.5 h-3 gap-3  flex items-center justify-center flex-shrink-0">
                    Select{" "}
                  </option>
                </select>
              </div>
            </div>
            {/* All project and  select bar End */}
            {/* weeks mont year flex-end Start */}
            <div className="flex  justify-end items-center gap-6 ">
              <div className="flex  w-80  items-center px-1 py-3 gap-6 ">
                <div className="font-roboto text-base font-normal tracking-normal leading- relaxed text-black">
                  Today
                </div>
                <div className="font-roboto text-base font-normal tracking-normal leading-relaxed text-black">
                  Week
                </div>
                <div className="font-roboto text-base font-normal tracking-normal leading-relaxed text-black">
                  Month
                </div>
                <div className="font-roboto text-base font-normal tracking-normal leading-relaxed text-blue-600">
                  Year
                </div>
              </div>
              <div
                className="flex items-center px-4 py-3 rounded-sm border-2 border- 
               inherit  h-8"
              >
                <label
                  for="startDate"
                  className="font-roboto text-base font-normal tracking-normal leading- 
                   relaxed text-slate-300"
                >
                  Select date:
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="font-roboto text-base font-normal tracking-normal leading- 
                   relaxed text-slate-300 gap-2"
                />

                <span>
                  <img src="/Images/rightarrow.svg" alt="" class="RarrowSize" />
                </span>

                <label
                  for="endDate"
                  className="font-roboto text-base font-normal tracking-normal leading- 
                   relaxed text-slate-300"
                >
                  End date:
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="font-roboto text-base font-normal tracking-normal leading- 
                   relaxed text-slate-300 gap-2"
                />
              </div>
            </div>
            {/* weeks mont year flex-end Ends */}
          </div>
        </section>
      </section>
    </>
  );
}