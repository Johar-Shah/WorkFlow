// import "/app/globals.css";
export default function CardComp() {
  return (
    <>
      <section className="flex flex-col p-5  bg-white gap-2 h-48 w-72 rounded-sm border-2 border-slate-200 ">
        <div className="flex flex-row justify-between items-center self-stretch w-56 h-8">
          <p
            className="text-slate-500 font-segoe-ui text-1.125rem font-semibold 
           leading-1.375rem"
          >
            Total Projects
          </p>
          <img
            className="w-4 h-4 bg-white"
            src="/Images/totalProjectIcon.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-start self-stretch w-56 h-8">
          <p
            className="text-black font-roboto text-1.875rem font-medium leading-2.5rem 
           w-9 h-10"
          >
            10
          </p>
        </div>
        <div className="flex items-center gap-1 self-stretch">
          <p
            className="text-black font-roboto text-0.875rem font-normal leading- 
           1.375rem"
          >
            Progress 12%
          </p>
          <img className="w-4 h-4 bg-white" src="/Images/uparrow.svg" />
        </div>
        <div
          className="w-56 bg-blue-500 h-1 self-stretch border-t border-conditional- 
         menu-item-text-selected"
        ></div>
        <div className="flex items-center gap-2 self-stretch w-56 h-8">
          <p className="text-black font-roboto text-0.875rem font-normal leading-1.375rem">
            Total task 120
          </p>
        </div>
      </section>
    </>
  );
}
