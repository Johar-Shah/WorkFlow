export default function SideBar(){
  return (
    <>
      <div className="SideBarProperties ">
        <div>
          <section className="DashBrdTitleImgFlex">
            {" "}
            <img
              className="SideBarIconSize"
              src="Images/SideBar/dashboardIcon.svg"
            />{" "}
            <span className="SideBarTitlePagesTxtBlue">Dashborad</span>
            <span>
              <img
                className="RightArrowSideBarSize"
                src="Images\SideBar\RightArrow.png"
              />
            </span>
          </section>
          <section className="ProjectsNotherTitleImgFlex">
            {" "}
            <img
              className="SideBarIconSize"
              src="Images/SideBar/ProjectIcon.svg"
            />{" "}
            <span className="SideBarTitlePagesTxt">Projects</span>
            <span>
              <img
                className="RightArrowSideBarSize"
                src="Images\SideBar\RightArrow.png"
              />
            </span>
          </section>
          <section className="ProjectsNotherTitleImgFlex">
            {" "}
            <img className="SideBarIconSize" src="Images/SideBar/Team.svg" />
            <span className="SideBarTitlePagesTxt">Team</span>
            <span>
              <img
                className="RightArrowSideBarSize"
                src="Images\SideBar\RightArrow.png"
              />
            </span>
          </section>
          <section className="ProjectsNotherTitleImgFlex">
            {" "}
            <img
              className="SideBarIconSize"
              src="Images/SideBar/Report.svg"
            />{" "}
            <span className="SideBarTitlePagesTxt">Reports</span>
            <span>
              <img
                className="RightArrowSideBarSize"
                src="Images\SideBar\RightArrow.png"
              />
            </span>
          </section>
          <section className="ProjectsNotherTitleImgFlex">
            {" "}
            <img
              className="SideBarIconSize"
              src="Images/SideBar/Preference.svg"
            />{" "}
            <span className="SideBarTitlePagesTxt">Preference</span>
            <span>
              <img
                className="RightArrowSideBarSize"
                src="Images\SideBar\RightArrow.png"
              />
            </span>
          </section>
          <section className="ProjectsNotherTitleImgFlex">
            {" "}
            <img
              className="SideBarIconSize"
              src="Images/SideBar/Notifi.svg"
            />{" "}
            <span className="SideBarTitlePagesTxt">Notification's</span>
            <span>
              <img
                className="RightArrowSideBarSize"
                src="Images\SideBar\RightArrow.png"
              />
            </span>
          </section>
        </div>

        {/* Last Section of side bar */}
        <div>
          <section className="ProjectsNotherTitleImgFlex">
            {" "}
            <img
              className="SideBarIconSize"
              src=" Images\SideBar\gettingStarted.svg"
            />{" "}
            <span className="SideBarTitlePagesTxt">Getting Started</span>
            <span>
              <img
                className="RightArrowSideBarSize"
                src="Images\SideBar\RightArrow.png"
              />
            </span>
          </section>
        </div>
      </div>
    </>
  );
}