import PortraitExhibit from "./PortraitExhibit";
import personalPortrait from "./profile_pic_1.png"

function CurrentWorkComponent(props) {
  return <PortraitExhibit
    portraitImg={personalPortrait}
    titleContent="My Recent Work"
    style="list"
    contentList={[
      {contentType:"text",  content: [
        {textContentType: "raw", textContent: "Currently working on analyzing previously collected fMRI data with machine learning methods by attempting to classify scans taken from a generalized anxiety disorder (GAD) group and control group in different conditions of an approach-avoid conflict task. This project is being written using "},
        {textContentType: "link", textContent: "Brainiak", linkURL: "https://brainiak.org/"},
        {textContentType: "raw", textContent: ", a Python package which implements various helper functions for brain imaging data to enable easier analysis with "},
        {textContentType: "link", textContent: "scikit-learn", linkURL: "https://scikit-learn.org/stable/"},
        {textContentType: "raw", textContent: "."},
      ]},

      {contentType:"text",  content: [
        {textContentType: "raw", textContent: "Studied real analysis using Stephen Abbott’s book "},
        {textContentType: "link", textContent: "“Understanding Analysis” 2nd Edition", linkURL: "https://www.amazon.ca/Understanding-Analysis-Stephen-Abbott/dp/1493927116"},
        {textContentType: "raw", textContent: ". The exercises were very well-constructed and explanations intuitive; I would recommend this book to anyone trying to self-learn the topic, which can be quite tricky without structured guidance."},
      ]},

      {contentType:"text",  content: [
        {textContentType: "raw", textContent: "Published a literature mapping paper at the ACM SIGCSE 2024 conference that investigates how alternative grading is studied in computer science education research. Over the summer of 2023, I worked with other students in the "},
        {textContentType: "link", textContent: "CMS Undergraduate Research Group", linkURL: "http://brianharrington.net/"},
        {textContentType: "raw", textContent: " to read through and classify ~40 papers based on the type of grading implemented in the study, the target audience and the metric used to evaluate results. This project served to outline current patterns in computer science education research and highlight potential areas for future investigation. Thank you to Professor Brian Harrington for the advice and support provided throughout the project!"},
      ]},

      {contentType:"text",  content: [
        {textContentType: "raw", textContent: "Most recent teaching experiences includes "},
        {textContentType: "link", textContent: "CSCC46 Social and Information Networks ", linkURL: "http://www.cs.toronto.edu/~ashton/cscc46/"},
        {textContentType: "raw", textContent: "with "},
        {textContentType: "link", textContent: "Professor Ashton Anderson ", linkURL: "https://www.cs.toronto.edu/~ashton/"},
        {textContentType: "raw", textContent: "and "},
        {textContentType: "link", textContent: "CSCD58 Computer Networks ", linkURL: "https://utsc.calendar.utoronto.ca/course/cscd58h3"},
        {textContentType: "raw", textContent: "with "},
        {textContentType: "link", textContent: "Professor Marcello Ponce.", linkURL: "https://www.utsc.utoronto.ca/cms/marcelo-ponce"},

      ]},

      {contentTyoe:"text",  content: [
        {textContentType:"raw", textContent: ""}
      ]},
    ]}
    
  />
}


export default CurrentWorkComponent;