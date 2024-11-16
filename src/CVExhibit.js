
/**
 * This is the old code which produced a sections based on the cvSections
 * passed in and also created header buttons on the side such that you could
 * click on those buttons to jump to the respective sections in the UI.
 * This was replaced in favour of a PDF viewer for the actual PDF instead.
 */
// function CVSection(props) {
//   return <>
//     <h4 id={"cv-section-header" + props.index} className="cv-section-header"> {props.headerText}</h4>
//     <p className="cv-section-paragraph">{props.paragraphText}</p>
//   </>
// }

// function CVExhibit(props) {
//   return <div className="cv-exhibit">
//     <div className="cv">
//       {props.cvSections.map((section, index) => {
//         return <CVSection
//           headerText={section.headerText}
//           paragraphText={section.paragraphText}
//           index={index}
//         />
//       })}
//     </div>
//     <div className="cv-header-list">
//       {props.cvSections.map((section, index) => {
//         return <button value={"/#cv-section-header" + index} onClick={() => window.location.replace("/#cv-section-header" + index)} className="cv-header-list-item"> {section.headerText}</button>
//       })}
//     </div>
//   </div>
// }

import cvPDF from "./Linda_CV.pdf"

function CVExhibit(props) {
  return <div className="cv-exhibit">
    <embed src={cvPDF} className="cv-pdf-viewer"/>

  </div>
}

export default CVExhibit;