import NavBar from "./Dashborad/Components/navbar";
import SideBar from "./Dashborad/Components/sidebar";
import ProjectComp from "./Dashborad/Components/card";
import ProjectView from "./Dashborad/Components/ProjectView";
import TopProjectResourc from "./Dashborad/Components/TopProjectResource";
import ProjectList from "./Dashborad/Components/ProjectList";
import ProjectForm from "./Pages/ProjectForm";
import ProjectStages from "./../app/Pages/Stages";
export default function Page() {
  return (
    <>
      <NavBar />
      {/* <SideBar /> */}
      {/* <h1 className="WorkFlowMangementTxt">Workflow Management</h1> */}
      {/* <ProjectComp />/ */}
      {/* <ProjectView had to work on it /> */}
      {/* <TopProjectResourc /> */}
      {/* <ProjectList /> */}
      <ProjectForm />
      {/* <ProjectStages /> */}
    </>
  );
}
