import PortraitExhibit from "./PortraitExhibit";
import personalPortrait from "./profile_pic_1.png"
import treeImage from "./a_person_sitting_under_tree_gray.png"

function AboutMeComponent(props) {
  return <PortraitExhibit
    portraitImg={personalPortrait}
    titleContent="About me"
    style="paragraph"
    contentList={[
      {contentType:"text",  content: [
          {textContentType: "raw", textContent: "Throughout my life, I have always been an avid learner and dedicated towards using that knowledge to better myself and the world around me. While my interests originally centred around biology and medicine (elementary school me would often be seen lugging around a medical textbook I borrowed from the library), my curiosity shifted towards statistical theory because of its importance to in scientific literature and the fact it forms the foundation of the rapidly spreading field of machine learning. I am dedicated towards researching and understanding current statistical methodology, as well as finding ways to improve upon existing practical applications."},
        ]
      },
      {contentType:"text",  content: [
          {textContentType: "raw", textContent: "I also have a strong passion for teaching and love sharing the things I’ve learned with other people. As someone who believes very strongly that knowledge is power in an increasingly complex and stratified world, I strive to make statistical theory and methodology as accessible as possible. I believe strengthening the general understanding of statistics will not only help improve the quality of work done in professional and academic settings, but also prevent the spread of misinformation that occurs when data is interpreted improperly."},
        ]
      },
      {contentType:"text",  content: [
          {textContentType: "raw", textContent: "“A society grows great when old men grow trees in whose shade they shall never sit”"},
        ]
      },
      
      {contentType:"image",  content: treeImage},
      {contentType:"text",  content: [
          {textContentType: "link", textContent: "image from pngtree.com", linkURL: "https://pngtree.com/freepng/a-person-sitting-under-black-silhouette-of-tree-clipart-with-transparent-background_15361435.html"},
        ]
      },
    ]}

    optionalContentImage={treeImage}
  />
}


export default AboutMeComponent;