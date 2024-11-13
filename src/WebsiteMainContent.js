
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
        {infoEntryName: "Phone Number:", infoEntryValue: "(416) 555-5555"},
        {infoEntryName: "Work Number:", infoEntryValue: "(416) 555-5555"},
        {infoEntryName: "Address:", infoEntryValue: "Toronto, Ontario, Canada"},
        {infoEntryName: "Otter Fax:", infoEntryValue: "(416) 55-OTTER"},
        {infoEntryName: "LinkedIn:", infoEntryValue: "https://linkedin.com/cutest-otter"},
      ]}
    />
  } else if (props.contentDisplayed === "about me") {
    contentComponentDisplayed = <AboutMeComponent/>
  } else if (props.contentDisplayed === "cv") {
    contentComponentDisplayed = <CVExhibit
      cvSections={[
        {headerText: "Physical Capcities", paragraphText: "Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Emotional Capcities", paragraphText: "Very soft and sweet creature that often live in families, we tend to live together along the coast and share meals Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. "},
        {headerText: "Cuteness Capcities", paragraphText: "Definitely the cutest of all marine mammals in existence, dolphins don't have the amazing furriness and warmth that we otters can endure Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Intellectual Capcities", paragraphText: "We are creatures that know how to use tools like rocks to break open shells and bottles to capture octopuses. We can easily destroy urchins and eat their insides Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Social Capcities", paragraphText: "Otters often hold paws together and sleep floating while we are holding paws. We also like to carry our young on our tummies to protected them from the super cold water. We form rafts Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Physical Capcities", paragraphText: "Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Emotional Capcities", paragraphText: "Very soft and sweet creature that often live in families, we tend to live together along the coast and share meals Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. "},
        {headerText: "Cuteness Capcities", paragraphText: "Definitely the cutest of all marine mammals in existence, dolphins don't have the amazing furriness and warmth that we otters can endure Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Intellectual Capcities", paragraphText: "We are creatures that know how to use tools like rocks to break open shells and bottles to capture octopuses. We can easily destroy urchins and eat their insides Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Social Capcities", paragraphText: "Otters often hold paws together and sleep floating while we are holding paws. We also like to carry our young on our tummies to protected them from the super cold water. We form rafts Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Physical Capcities", paragraphText: "Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Emotional Capcities", paragraphText: "Very soft and sweet creature that often live in families, we tend to live together along the coast and share meals Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. "},
        {headerText: "Cuteness Capcities", paragraphText: "Definitely the cutest of all marine mammals in existence, dolphins don't have the amazing furriness and warmth that we otters can endure Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Intellectual Capcities", paragraphText: "We are creatures that know how to use tools like rocks to break open shells and bottles to capture octopuses. We can easily destroy urchins and eat their insides Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
        {headerText: "Social Capcities", paragraphText: "Otters often hold paws together and sleep floating while we are holding paws. We also like to carry our young on our tummies to protected them from the super cold water. We form rafts Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s. Able to hold my breath for more than 8 minutes underwater and swim faster than any human, easily surpassing 5 m/s."},
      ]}
    />
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