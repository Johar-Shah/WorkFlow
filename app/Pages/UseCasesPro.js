export default function Procurement() {
  return (
    <>
      <main className="bg-gray-200  w-full  ">
        <div className="ProcurWrongFlex">
          <div className="ProcurWrkFlwTxt">Procurement workflow</div>
          <img src="/Images/wrong.svg" />
        </div>
        {/* Top bar UseCase */}
        <section className="TopBarMainSectionFlex ">
          <p className="UseCasesTxt">UseCases</p>
          <div className="BtnSearchFlexLeft">
            <div className="SearchTxtSearchBarFlex">
              <input
                className="SearchTxt"
                type="text"
                placeholder="Search text"
              />
              <span>
                <button className="UseCaseBtnClr">
                  <img src="/Images/Search.svg" className="fill-white" />
                </button>
              </span>
            </div>
            <button className="OrientViewBtn">Orinet View</button>
            <button className="ResoucesViewBtn">Resource View</button>
          </div>
        </section>
        {/* Requiment Mock Development  actual component  CD/Ci test  Stage/Release */}
        <section className=" flex flex-row justify-start gap-3 p-3 items-start">
          {/* Requirement section */}
          <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center  ">
            <div className="flex flex-row justify-between w-64 item-start pb-3  ">
              <p className="RequirementText">Requirement</p>
              <img src="Images/Plus.svg" className="w-6" />
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-1</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDate">12/09/2023</p>
                </div>
              </div>
            </div>
          </div>
          {/*  Mock development   */}
          <div className=" flex flex-col items-start justify-center gap-10">
            <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center gap-3">
              <div className="flex flex-row justify-between w-64 item-start pb-3   ">
                <p className="RequirementText">Mock Develpoment</p>
                <img src="Images/Plus.svg" className="w-6" />
              </div>
              <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
                <p className="UseCaseTxt">UseCase-1</p>
                <div className=" flex flex-row justify-start items-center gap-2">
                  <div>
                    <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                    <p className="AssignedColTxtUsecaseComp">
                      No. of Resources:
                    </p>
                    <p className="AssignedColTxtUsecaseComp">Dates:</p>
                  </div>
                  <div>
                    <p className="NameProfileColUsecaseComp">Angela Monus</p>
                    <p className="NameProfileColUsecaseComp">04</p>
                    <p className="NameProfileColUsecaseCompDate">12/09/2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
                <p className="UseCaseTxt">UseCase-2</p>
                <div className=" flex flex-row justify-start items-center gap-2">
                  <div>
                    <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                    <p className="AssignedColTxtUsecaseComp">
                      No. of Resources:
                    </p>
                    <p className="AssignedColTxtUsecaseComp">Dates:</p>
                  </div>
                  <div>
                    <p className="NameProfileColUsecaseComp">Angela Monus</p>
                    <p className="NameProfileColUsecaseComp">04</p>
                    <p className="NameProfileColUsecaseCompDateGreenClrDate">
                      12/09/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
                <p className="UseCaseTxt">UseCase-3</p>
                <div className=" flex flex-row justify-start items-center gap-2">
                  <div>
                    <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                    <p className="AssignedColTxtUsecaseComp">
                      No. of Resources:
                    </p>
                    <p className="AssignedColTxtUsecaseComp">Dates:</p>
                  </div>
                  <div>
                    <p className="NameProfileColUsecaseComp">Angela Monus</p>
                    <p className="NameProfileColUsecaseComp">04</p>
                    <p className="NameProfileColUsecaseCompDate">12/09/2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
                <p className="UseCaseTxt">UseCase-4</p>
                <div className=" flex flex-row justify-start items-center gap-2">
                  <div>
                    <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                    <p className="AssignedColTxtUsecaseComp">
                      No. of Resources:
                    </p>
                    <p className="AssignedColTxtUsecaseComp">Dates:</p>
                  </div>
                  <div>
                    <p className="NameProfileColUsecaseComp">Angela Monus</p>
                    <p className="NameProfileColUsecaseComp">04</p>
                    <p className="NameProfileColUsecaseCompDateGreenClrDate">
                      12/09/2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mock development */}

          {/* Actual Development */}
          <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center gap-3 ">
            <div className="flex flex-row justify-between w-64 item-start pb-3  ">
              <p className="RequirementText">Actual Development</p>
              <img src="Images/Plus.svg" className="w-6" />
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-1</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDateGreenClrDate">
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-2</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDate">12/09/2023</p>
                </div>
              </div>
            </div>
          </div>
          {/* Actual Development */}
          {/* CD/CI Develpoment */}
          <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center gap-3 ">
            <div className="flex flex-row justify-between w-64 item-start pb-3  ">
              <p className="RequirementText">CD/CI Development</p>
              <img src="Images/Plus.svg" className="w-6" />
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-1</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDateGreenClrDate">
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-2</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDate">12/09/2023</p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-3</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDateGreenClrDate">
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-4</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDate">12/09/2023</p>
                </div>
              </div>
            </div>
          </div>
          {/* CD/CI Develpoment */}
          {/* Stage Release */}
          <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center gap-3 ">
            <div className="flex flex-row justify-between w-64 item-start pb-3  ">
              <p className="RequirementText">Stage Release</p>
              <img src="Images/Plus.svg" className="w-6" />
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-1</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDateGreenClrDate">
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-2</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDateGreenClrDate">
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-3</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDateGreenClrDate">
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="UseCaseTxt">UseCase-4</p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="AssignedColTxtUsecaseComp">Assigned to</p>
                  <p className="AssignedColTxtUsecaseComp">No. of Resources:</p>
                  <p className="AssignedColTxtUsecaseComp">Dates:</p>
                </div>
                <div>
                  <p className="NameProfileColUsecaseComp">Angela Monus</p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p className="NameProfileColUsecaseCompDate">12/09/2023</p>
                </div>
              </div>
            </div>
          </div>
          {/* Satge Release */}
        </section>
      </main>
    </>
  );
}
