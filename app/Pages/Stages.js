"use client";
import AddStage from "./../../public/Modal/AddStages";
import AddCheckList from "./../../public/Modal/AddCheckList";
import SubStages from "./../../public/Modal/AddSubStages";

export default function ProjectStages() {
  return (
    <>
      <div className="flex flex-row ">
        <section className="">
          <div className="ProjectStagesBar ">Stages</div>
          {/* <div className="flex flex-row justify-evenly"> */}
          {/* left Conatiner Box  Stages */}
          <section className="LeftStagesSection">
            <div className="AddSatge1Txt">Add Stages</div>

            {/* Stages start */}
            <div className="px-6 py-4 ">
              <div className="border border-blue-100 rounded-lg mb-4">
                <div className="LeftSectionStagesStage1">
                  <div className="Satge1Txt">Stage 1</div>
                  <div>
                    <div className="RequirementStages">Requirement</div>
                    <div className="AddStages">
                      <SubStages />
                    </div>
                    <div className="AddCheckListStages">
                      <AddCheckList />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-blue-100 rounded-lg mb-4">
                <div className="LeftSectionStagesStage1">
                  <div className="Satge1Txt">Stage 2</div>
                  <div>
                    <div className="RequirementStages">Mock Development</div>
                    <div className="AddStages">
                      <SubStages />
                    </div>
                    <div className="AddCheckListStages">
                      <AddCheckList />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-blue-100 rounded-lg mb-4">
                <div className="LeftSectionStagesStage1">
                  <div className="Satge1Txt">Stage 3</div>
                  <div>
                    <div className="RequirementStages">Actual Development</div>
                    <div className="AddStages">
                      {" "}
                      <SubStages />
                    </div>
                    <div className="AddCheckListStages">
                      {" "}
                      <AddCheckList />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-blue-100 rounded-lg mb-4 ">
                <div className="LeftSectionStagesStage1">
                  <div className="Satge1Txt">
                    <AddStage />
                  </div>
                  <div>
                    <div className="RequirementStages"></div>
                    <div className="AddStages"></div>
                    <div className="AddCheckListStages"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* left Conatiner Box  Stages */}
            <button
              className="flex  px-1 py-4 justify-center items-center gap-2 
             border rounded border-blue-700 bg-blue-500 hover-blue-700 w-16 h-8 m-5 ml-[1500px]"
            >
              Save
            </button>
          </section>
        </section>
      </div>
      <div className="flex flex-col">
        {/* <SubStages /> */}
        {/* <AddCheckList /> */}
        {/* <AddStage /> */}
      </div>
    </>
  );
}
{
  /* <StagesScr />; */
}
