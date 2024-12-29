import PortraitExhibit from "./PortraitExhibit";
import personalPortrait from "./profile_pic_1.jpg"
import treeImage from "./a_person_sitting_under_tree_gray.png"

function AboutMeComponent(props) {
  return <PortraitExhibit
    portraitImg={personalPortrait}
    titleContent="About me"
    style="paragraph"
    contentList={[
      {contentType:"text", className:"about-me-description-header",  content: [
        {textContentType:"raw", textContent: "Introduction"}
      ]},

      {contentType:"text",  content: [
        {textContentType:"raw", textContent: "I am an alumni of the University of Toronto currently applying to PhD programs in statistics with the long term goal of going into academia to research and teach. I grew up in Toronto and attended the  Scarborough campus from 2016 to 2021 obtaining a Bachelor degree in Computer Science and Neuroscience, along with a minor in Statistics. My research interests include theories of statistical inference, developing workflows for analyzing neuroimaging data, interpretive machine learning, multilevel modelling with applications to healthcare and statistical pedagogy."}
      ]},

      {contentType:"text",  content: [
        {textContentType:"raw", textContent: "In my spare time, I read novels & non-fiction books about history, current events, and scientific topics. I also like to watch documentaries and fictional shows, and make art. When I am able to do so, I enjoy outdoor activities such as swimming, frisbee, skating, and skiing."}
      ]},

      {contentType:"text",  content: [
        {textContentType:"raw", textContent: "I also very much enjoy playing group games (both video games and board games) with friends and family, especially those that are of the puzzle solving, social deduction, or roleplay variety."}
      ]},

      {contentType:"text", className:"about-me-description-header",  content: [
        {textContentType:"raw", textContent: "Why Statistics?"}
      ]},

      {contentType:"text",  content: [
        {textContentType:"raw", textContent: "Throughout my life, I have always been an avid learner and am dedicated to using that knowledge to better myself and the world around me. While my interests originally centred around biology and medicine (my elementary school self would often be seen lugging around a medical textbook I borrowed from the library), my curiosity shifted towards statistical theory because of its importance in scientific literature and the way it forms the foundation of the rapidly growing field of machine learning. I am committed towards researching and understanding current statistical methodology, as well as finding ways to improve upon existing practical applications."}
      ]},

      {contentType:"text", className:"about-me-description-header",  content: [
        {textContentType:"raw", textContent: "Why Teaching?", className: "about-me-description-header"}
      ]},

      {contentType:"text", className:"quote-italics",  content: [
        {textContentType:"raw", textContent: "“A society grows great when old men grow trees in whose shade they shall never sit.”"}
      ]},

      {contentType:"text",  content: [
        {textContentType:"raw", textContent: "Besides taking great joy in sharing what I’ve learned with others, I believe teaching statistics (and teaching in general) is important for maintaining and improving societal systems.  As someone who strongly believes that knowledge is essential in an increasingly complex and stratified world, I would like to make statistical theory and methodology as accessible as possible to people from all backgrounds. I believe that strengthening the general understanding of statistics will not only help improve the quality of work done in professional and academic settings, but also prevent the spread of misinformation that occurs when data is interpreted improperly."}
      ]},
      
      {contentType:"image",  content: treeImage, className: "description-list-item-image"},
      {contentType:"text",  content: [
          {textContentType: "link", textContent: "image from pngtree.com", linkURL: "https://pngtree.com/freepng/a-person-sitting-under-black-silhouette-of-tree-clipart-with-transparent-background_15361435.html"},
        ]
      },
    ]}
  />
}


export default AboutMeComponent;