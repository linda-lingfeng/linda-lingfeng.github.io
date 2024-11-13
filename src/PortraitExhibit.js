


function Portrait(props) {
  return <div className="portrait-frame">
    <img src={props.portraitImg} className="portrait" alt="portrait" />
  </div>
}


function DescriptionBox(props) {
  return <div className="description">
    <h4 className="description-title"> {props.titleContent} </h4>
    <div className="description-list">
      {props.contentList.map((item) => {
        return (<p className="description-list-item">{item}</p>)
      })}
    </div>
  </div>;
}


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
      />
    </div>
  </div>
}


export default PortraitExhibit;