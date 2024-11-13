

function CVSection(props) {
  return <>
    <h4 className="cv-section-header"> {props.headerText}</h4>
    <p className="cv-section-paragraph">{props.paragraphText}</p>
  </>
}





function CVExhibit(props) {
  return <div className="cv-exhibit">
    <div className="cv">
      {props.cvSections.map((section) => {
        return <CVSection
          headerText={section.headerText}
          paragraphText={section.paragraphText}
        />
      })}
    </div>
    <div className="cv-header-link-list">
      {props.cvSections.map((section) => {
        return <h4 className="cv-header-link-item"> {section.headerText}</h4>
      })}
    </div>
  </div>
}


export default CVExhibit;