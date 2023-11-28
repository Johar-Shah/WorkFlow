export default function ProjectList()
{
  return (
    <>
      <section>
        {/* TopBar */}
        <div className="ProjectListTopSec">
          <div className="ProjectListTxt">Project Lists</div>

          <div className="PLBtnFlex">
            <div className="PLLeftContextButton">All Projects</div>
            <div className="PLLeftContextButtonLastTwo">IN-Progress</div>
            <div className="PLLeftContextButtonLastTwo">Completed</div>
          </div>
        </div>
        {/* TopBar */}
        {/* Graph Section Under taking Projects */}
        <section className="PLGraphContent">
          <div className="PLProcurementTxt">Procurement</div>
          <div className="PlInprogress">In-Progress</div>
          <div className="PLCurrentStage">Current Stage - CICD Test</div>
          <div className="PLDueDate">Due Date: 12-09-2023</div>
          {/* Graph Container */}
          <div className="PLCompleted">Completed</div>
        </section>
        {/* Graph Section Under taking Projects */}
      </section>
    </>
  );
}