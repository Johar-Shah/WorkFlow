// import '../../globals.css';
// import "./styles/TopProjectResources.css";
import "../../globals.css";
export default function TopProjectResourc() {
  return (
    <>
      <section>
        {/* topbar */}
        <div className="PRTxtFlex">
          <p className="TopProjectResourceTxt">Top Project Resource</p>
          <div className="PRSearchFlexLeft">
            <div className="SearchBarFlexPR">
              <span>
                <img className="ImgSearchIcon" src="/Images/search.svg" />
              </span>
              <input
                className="SearchBarTxt"
                type="search"
                placeholder="Search..."
              />
            </div>
            <div className="PRMonthlyText">
              Monthly{" "}
              <span>
                <img src="/Images/downarrow.svg" />
              </span>
            </div>
          </div>
        </div>
        {/* topbar */}
        <div className="PRGraphUpperTxt">Top most resources working on top 
         projects</div>
        {/* Graph */}
        
        {/* Graph */}
      </section>
    </>
  );
}
