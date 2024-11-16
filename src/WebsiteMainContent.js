
import ContactInfo from "./ContactInfo";
import AboutMeComponent from "./AboutMeComponent";
import CurrentWorkComponent from "./CurrentWorkComponent";
import CVExhibit from "./CVExhibit";


/**
 * Main website content that will be in the div.body element. The surrounding
 * div for this component is designed to keep the main content centered
 */
function WebsiteMainContent(props) {
  

  let contentComponentDisplayed;
  if (props.contentDisplayed === "contact") {
    contentComponentDisplayed = <ContactInfo
      contactInfoList={[
        {infoEntryName: "Email:", infoEntryValue: "linda.lingfeng.lo@gmail.com"},
        {infoEntryName: "LinkedIn:", infoEntryValue: "https://linkedin.com/in/linda-lingfeng"},
      ]}
    />
  } else if (props.contentDisplayed === "about me") {
    contentComponentDisplayed = <AboutMeComponent/>
  } else if (props.contentDisplayed === "cv") {
    contentComponentDisplayed = <CVExhibit/>
  } else if (props.contentDisplayed === "current work") {
    contentComponentDisplayed = <CurrentWorkComponent/>
  } else {
    contentComponentDisplayed = <div> Invalid content to display </div>
  }


  return (<div className="main-content">
    {contentComponentDisplayed}
  </div>);
}




export default WebsiteMainContent;