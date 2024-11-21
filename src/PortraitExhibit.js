


function Portrait(props) {
  return <div className="portrait-frame">
    <img src={props.portraitImg} className="portrait" alt="portrait" />
  </div>
}


function DescriptionParagraphs(props) {
  return <div className="description-list">
    {props.contentList.map((descriptionItem) => {

    let className = descriptionItem.className ? "description-list-item " + descriptionItem.className : "description-list-item";
    if (descriptionItem.contentType === "text") {

      /* Each child in this list is either a span with no styling or it is
          an anchor which is a link with text for it they will all be put
          into a block-level container which is returned. */
      let children = descriptionItem.content.map((paragraphItem) => {
          if (paragraphItem.textContentType === "raw") {
            return <span>{paragraphItem.textContent}</span>
          } else if (paragraphItem.textContentType === "link") {
            return <a href={paragraphItem.linkURL}> {paragraphItem.textContent}</a>
          }
        });
      
      
      return (<p className={className} children={children}/>);
    
    
    /* Image Case: render the image from the source provided */
    } else if (descriptionItem.contentType === "image") {
      return (<img className={className} src={descriptionItem.content}></img>)
    }
    
    })}
  </div>
}



function DescriptionList(props) {
  return <ul className="description-list">
    {props.contentList.map((descriptionItem) => {
      if (descriptionItem.contentType === "text") {

        /* Each child in this list is either a span with no styling or it is
            an anchor which is a link with text for it they will all be put
            into a block-level container which is returned. */
        let children = descriptionItem.content.map((paragraphItem) => {
            if (paragraphItem.textContentType === "raw") {
              return <span>{paragraphItem.textContent}</span>
            } else if (paragraphItem.textContentType === "link") {
              return <a href={paragraphItem.linkURL}> {paragraphItem.textContent}</a>
            }
          });
        return (<li className="description-list-item" children={children}/>);
      }
    })}
  </ul>;
}


function DescriptionBox(props) {
  let descriptionContent;
  if (props.style === "paragraph") {
    descriptionContent = <DescriptionParagraphs contentList={props.contentList} />
  } else if (props.style === "list") {
    /* NOTE that description List does NOT support custom class names in the same way  */
    descriptionContent = <DescriptionList contentList={props.contentList} />
  } else {
    descriptionContent = <div className="description-list"></div>
  }


  return <div className="description-box">
    <h4 className="description-title"> {props.titleContent} </h4>
    {descriptionContent}
  </div>;
}


/**
 * Designs an exhibit for a potrait on the left with text to the right
 */
function PortraitExhibit(props) {
  return <div className="portrait-exhibit">
    <div className="portrait-container">
      <Portrait
        portraitImg={props.portraitImg}
      />
    </div>
    <div className="portrait-description">
      <DescriptionBox
        titleContent={props.titleContent}
        contentList={props.contentList}
        style={props.style}
      />
    </div>
  </div>
}


export default PortraitExhibit;