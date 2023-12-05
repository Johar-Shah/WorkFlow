// import BarChart from "../Graphs/graph.js";
import ReChart from "../Graphs/graphRe.js";
export default function  ProjectView()
{
  return (
    <>
      {/* <section className="flex flex-col items-start flex-shrink-0 w-auto h-auto border-2 rounded-sm border-inherit bg-white gap-2 p-3"> */}
      <section className="">
        <div className="ProjectOverViewFlex">
          <p className="ProjectOverViewTxt">Project Overview</p>
        </div>
        <div className="ProjectOverviewDiv"></div>
        <section>
          <div className="ProjectOverviewAllProjectsFlexButton">
            <div className="AllProjectButtonFlex">
              <span className="PRAllProjects">All Projects</span>
              <div className="PRAllProjectsLine"></div>
            </div>
            <div className="SelectArrow">
              <span className="PRSelect">Select</span>{" "}
              <span>
                <img className="DownArrowImg" src="Images\downarrow.svg" />{" "}
              </span>
            </div>
          </div>
          {/* <BarChart /> */}
          <ReChart />
        </section>
      </section>
    </>
  );
}