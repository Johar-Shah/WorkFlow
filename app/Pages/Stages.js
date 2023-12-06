export default function ProjectStages(){
return (
  <>
    <section>
      <div className="ProjectStagesBar">Stages</div>
      {/* left Conatiner Box  Stages */}
      <section className="LeftStagesSection">
        <div className="AddSatge1Txt">Add Stages</div>

        {/* Stages start */}
        <div className="LeftSectionStagesStage1">
          <div className="Satge1Txt">Stage 1</div>
          <div>
            <div className="RequirementStages">Requirement</div>
            <div className="AddStages">+Add Sub Stages</div>
            <div className="AddCheckListStages">+Add Check List</div>
          </div>
        </div>
        <div className="LeftSectionStagesStage1">
          <div className="Satge1Txt">Stage 2</div>
          <div>
            <div className="RequirementStages">Mock Development</div>
            <div className="AddStages">+Add Sub Stages</div>
            <div className="AddCheckListStages">+Add Check List</div>
          </div>
        </div>
        <div className="LeftSectionStagesStage1">
          <div className="Satge1Txt">Stage 3</div>
          <div>
            <div className="RequirementStages">Actual Development</div>
            <div className="AddStages">+Add Sub Stages</div>
            <div className="AddCheckListStages">+Add Check List</div>
          </div>
        </div>
        <div className="LeftSectionStagesStage1">
          <div className="Satge1Txt">+Add Stages</div>
          <div>
            <div className="RequirementStages"></div>
            <div className="AddStages"></div>
            <div className="AddCheckListStages"></div>
          </div>
        </div>
        {/* left Conatiner Box  Stages */}
      </section>
      {/* <div className="AddStagsCol">+Add Stages</div> */}

      <section>
        {/* Right Container Box Stages  */}
        <p className="StagesAddResourcesTxt">Add Resources</p>
        <div className="StagesRightContainerHeader">
          <div className="flex flex-row justify-start items-center gap-1 text-center bg-white w-64 h-8 rounded-md border border-black p-1">
            <span>
              <img className="SearchSize" src="/Images/search.svg" />
            </span>
            <input
              className="SearchTxtStagesRightCont"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div className="StagesRightContainerSrchBtnFlex">
            <div className="StagesRightContainerBtnAll">All</div>
            <div className="SatgesRightContainerBtnSelectAval">Selected</div>
            <div className="SatgesRightContainerBtnSelectAval">Available</div>
          </div>
        </div>
        {/* Profile Region */}
        <div>
          <div>
            <input type="checkbox" />
            <img src="/Images/PagesFolder/Profile1.svg" />
            <div>
              <p>Alex Ben</p>
              <p>UX Research</p>
            </div>
          </div>

        </div>
        {/* Right Container Box Stages  */}
      </section>
    </section>
  </>
);};