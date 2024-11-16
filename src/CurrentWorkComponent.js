import PortraitExhibit from "./PortraitExhibit";
import otterPortrait from "./profile_pic_1.png"

function CurrentWorkComponent(props) {
  return <PortraitExhibit
    portraitImg={otterPortrait}
    titleContent="My Current Work"
    contentList={[
        "Created a super useful pouch in my fur to hold the bestest rock, it is very useful because you never know when you need to throw a rock at someone for being mean to an otter",
        "I am currently whooshing through the water daily to catch the bestest fishy, I know how to get past the scales a nom on the fishy",
        "I had an amazing time playing a breath holding contest with a beaver, which I lost but learned a lot from the beaver on how to do it better",
        "Because I spend a lot of time with other otters I learned how to hug and wub very well. It is most common to do when we are about to sleep.",
      ]}
  />
}


export default CurrentWorkComponent;