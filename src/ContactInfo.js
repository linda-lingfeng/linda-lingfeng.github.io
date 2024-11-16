
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
    <h2 className="contact-info-header"> Contact Information</h2>
    <div className="contact-info-description">
    If you would like to get in touch, please feel free to use any of the avenues below. In general, I will reply fastest by email. Please remember to introduce yourself when contacting me so your message does not get classified as spam.
    </div>

    {props.contactInfoList.map((entry) => {
      return <ContactInfoEntry
        infoEntryName={entry.infoEntryName}
        infoEntryValue={entry.infoEntryValue}
      />
    })}
  </div>
}

export default ContactInfo;