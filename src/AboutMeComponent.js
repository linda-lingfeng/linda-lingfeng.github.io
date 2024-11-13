import PortraitExhibit from "./PortraitExhibit";
import otterPortrait from "./otter_portrait.jpg"

function AboutMeComponent(props) {
  return <PortraitExhibit
    portraitImg={otterPortrait}
    titleContent="About me"
    contentList={[
        "Thirteen different species exist around the globe. The U.S. is home to two species: the sea otter and the North American river otter. River otters are much smaller — averaging 10-30 pounds — with a cylindrical body and small head. Sea otters weigh more — around 45-90 pounds — with large, furry faces.",
        "Otters are part of the Mustelidae family, which is a family of carnivorous mammals that includes skunks, weasels, wolverines, and badgers. The sea otter is the largest member of the weasel family, yet the smallest marine mammal in North America.",
        "Approximately 90 percent of the world’s sea otters live in coastal Alaska. Many live in the waters surrounding public lands including Kodiak National Wildlife Refuge, Kenai Fjords National Park, and Glacier Bay National Park. Southern sea otters range along the mainland coastline of California from San Mateo County to Santa Barbara County, and San Nicolas Island.",
        "Hunted to the edge of extinction by fur traders in the 18th and 19th centuries, the few remaining sea otters (about 2,000 scattered in remnant colonies throughout the North Pacific rim) were first protected by the International Fur Seal Treaty in 1911. Sea otters in the United States received additional protections with the passage of the Marine Mammal Protection Act and the Endangered Species Act in the 1970s.",
        "Sea otters’ diets include sea urchins, crabs, mussels, and clams, which they’re known to crack open with a rock and eat while floating in the water. To find food, sea otters may occasionally dive as deep as 250 feet and will use their sensitive whiskers to locate small prey inside crevices or their strong forepaws to dig for clams.",
        "Their fur contains between 600,000 to 1,000,000 hair follicles per square inch. Unlike most other marine mammals, otters lack a blubber layer. Instead, they depend on their dense, water-resistant fur to provide insulation. To keep warm, sea otters spend a large portion of their days grooming and conditioning their fur. This traps air and heat next to their skin.",
        "Southern sea otters breed and pup year-round, while northern sea otter pups in Alaska are usually born in the spring. A newborn pup needs constant attention and will stay with its mother for six months until it develops survival skills. Fun fact: An otter pup’s fur is so dense that it can’t dive underwater until it gets its adult fur. This comes in handy when mothers leave their pups safely floating on the water’s surface while they forage for food.",
        "An otter’s lung capacity is 2.5 times greater than that of similar-sized land mammals. Sea otters have been known to stay submerged for more than 5 minutes at a time. River otters, however, can hold their breath for up to 8 minutes. The increased time underwater improves otters’ opportunity to sense prey and forage for food.",
        "A “keystone species” is a species that is critical to how an ecosystem functions because it has large-scale effects on the communities in which it lives. Along the Pacific coast, sea otters help control the sea urchin population. Fewer sea urchins in turn help prevent kelp forests from being overgrazed. In California, research has found that sea otters also enhance seagrass beds, and in Alaska’s Glacier Bay National Park, sea otters’ expansion into the area marked a gradual return of a more diverse ecosystem and an exciting moment in colonization efforts.",
        "A sea otter’s tool of choice: typically a rock that can be used as a hammer or anvil to break open hard-shelled prey. Ever wonder where otters actually store these tools for safe keeping? They have a loose patch of skin under their armpit to store both the food they’ve foraged and their rock to crack it open.",
        "Otters love to rest in groups. Researchers have seen concentrations of over 1,000 otters floating together. To keep from drifting away from each other, sea otters will wrap themselves up in seaweed, forming something that resembles a raft.",
        "Otters have strong teeth and a powerful bite. So, whether you see an otter on land or at sea, be sure to maintain a safe distance of at least 5 kayak lengths or 60 feet from the otters. Learn more about staying safe around sea otters.",
      ]}
  />
}


export default AboutMeComponent;