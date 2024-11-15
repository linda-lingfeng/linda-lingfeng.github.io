

function CVSection(props) {
  return <>
    <h4 id={"cv-section-header" + props.index} className="cv-section-header"> {props.headerText}</h4>
    <p className="cv-section-paragraph">{props.paragraphText}</p>
  </>
}





function CVExhibit(props) {
  return <div className="cv-exhibit">
    <div className="cv">
      {props.cvSections.map((section, index) => {
        return <CVSection
          headerText={section.headerText}
          paragraphText={section.paragraphText}
          index={index}
        />
      })}
    </div>
    <div className="cv-header-list">
      {props.cvSections.map((section, index) => {
        return <button value={"/#cv-section-header" + index} onClick={() => window.location.replace("/#cv-section-header" + index)} className="cv-header-link-item"> {section.headerText}</button>
      })}
    </div>
  </div>
}


export default CVExhibit;