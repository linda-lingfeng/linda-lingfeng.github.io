
function ContactInfoEntry(props) {
  return <p className="contact-info-entry">
    <span className="contact-info-entry-name"> {props.infoEntryName} </span>
    {props.infoEntryValue.startsWith("https")
      ? <a className="contact-info-entry-link" href={props.infoEntryValue}> {props.infoEntryValue} </a>
      : <span className="contact-info-entry-value"> {props.infoEntryValue} </span> }
  </p>
}


function ContactInfo(props) {
  return <div className="contact-info">
    {props.contactInfoList.map((entry) => {
      return <ContactInfoEntry
        infoEntryName={entry.infoEntryName}
        infoEntryValue={entry.infoEntryValue}
      />
    })}
  </div>
}

export default ContactInfo;