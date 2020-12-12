export const sectionList = document.querySelector(".section-list");
import sectionTmp from "../templates/Section.hbs";


const sections = {
  HOME: "home",
  ARTS: "arts",
  SCIENCE: "science",
  US: "us",
  WORLS: "world"
};

const createSection = sections => {
  const sectionNames = Object.values(sections);
  const sectionItems = sectionNames.map(el => sectionTmp({ el }));
  sectionList.insertAdjacentHTML("beforeend", sectionItems.join(" "));
};

createSection(sections);
