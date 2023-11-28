export default function NavBar(){
  return (
    <>
      <section className="NavigationFlex">
        <div>
          <img className="LogoSynt" src="Images\NavigationImg\logo.svg" />
        </div>
        <div className="SearchBoxSearchFlex">
          <input type="text" placeholder="Search" className="SearchTxtNav" />
          <img src="Images\search.svg" className="ImgSearchNav" />
        </div>
        <div className="RightIconNavFlex">
          <img
            className="NavLogoRightIcons"
            src="Images\NavigationImg\question.svg"
          />
          <img
            className="NavLogoRightIcons"
            src="Images\NavigationImg\bell.svg"
          />
          <div className="ProfileTxtFlex">
            <img className="NavLogoRightIconsPrfile" 
             src="Images\NavigationImg\profile.svg"/>
             <div className="ProfileNameTxtNav">Sarita Me</div>
          </div>
        </div>
      </section>
    </>
  );
}