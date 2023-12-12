import NavBar from "./Dashborad/Components/navbar";
import SideBar from "./Dashborad/Components/sidebar";
import ProjectComp from "./Dashborad/Components/card";
import ProjectView from "./Dashborad/Components/ProjectView";
import TopProjectResourc from "./Dashborad/Components/TopProjectResource";
import ProjectList from "./Dashborad/Components/ProjectList";
import ProjectForm from "./Pages/ProjectForm";
import ProjectStages from "./../app/Pages/Stages";
import Procurement from './Pages/UseCasesPro';

import AddSubStage from "./../public/Modal/AddSubStages";
import AddStage from './../public/Modal/AddStages';
import AddCheckList from '../public/Modal/AddCheckList';
export default function Page() {
  return (
    <>
      {/* <NavBar />
      <div className="flex flex-row items-start justify-start ">
        <SideBar />
        <Procurement />
      </div> */}
      {/* <h1 className="WorkFlowMangementTxt">Workflow Management</h1> */}
      {/* <ProjectComp />/ */}
      {/* <ProjectView had to work on it /> */}
      {/* <TopProjectResourc /> */}
      {/* <ProjectList /> */}
      {/* <ProjectForm /> */}
      {/* <ProjectStages /> */}
      <div className="flex flex-col justify-start items-start">
        <NavBar />
        {/* <SideBar/>
        <h1 className="WorkFlowMangementTxt">Workflow Management</h1>
        <ProjectStages /> */}
        <div className="flex flex-row items-start">
          <SideBar />
          <div className="flex flex-col justify-start items-start gap-3">
            <h1 className="WorkFlowMangementTxt">Workflow Management</h1>
            <ProjectStages />
          </div>
        </div>
      </div>
    </>
  );
}
