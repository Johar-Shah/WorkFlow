import NavBar from './Dashborad/components/navbar';
import SideBar from './Dashborad/components/sidebar';
import ProjectComp from "./Dashborad/components/card";
import ProjectView from './Dashborad/components/ProjectView';
import TopProjectResourc from './Dashborad/components/TopProjectResource';
import ProjectList from './Dashborad/components/ProjectList';
export default function Page() {
  return (
    <>
      <NavBar />
      <SideBar />
      <h1 className="WorkFlowMangementTxt">Workflow Management</h1>

      <ProjectComp />

      <ProjectView />
      {/* <ProjectComp /> */}
      <TopProjectResourc />
      <ProjectList />
    </>
  );
}
