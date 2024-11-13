
function ContactInfoEntry(props) {
  return <p className="contact-info-entry">
    <span className="contact-info-entry-name"> {props.infoEntryName} </span>
    <span className="contact-info-entry-value"> {props.infoEntryValue} </span>
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