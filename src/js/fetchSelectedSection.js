import { sectionList } from "./createorSectionList";
import { fetchArticles, articlesParams } from "./app";
import { numberButtonTxt, nextButton, enableButton } from "./pagination";
import { scrollToArtList } from "./helpers/scrollToTop";

const fetchBySection = e => {
  changeViews(e);
  const sectionName = e.target.dataset.name;
  fetchArticles(sectionName);
};

const changeViews = section => {
  scrollToArtList("smooth", 570);
  Array.from(section.currentTarget.children).map(el =>
    el.classList.remove("selected")
  );
  articlesParams.page = 0;
  numberButtonTxt.textContent = `${articlesParams.page + 1}`;
  enableButton(nextButton);
  section.target.classList.add("selected");
};

sectionList.addEventListener("click", fetchBySection);
