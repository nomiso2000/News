import { persistedArticles } from "./addToStorage";
const seeLateLink = document.querySelector(
  ".navigation__list-item-link--seeLate"
);
const articleListContainer = document.querySelector(".articleList-container");
const savedArticlesList = document.querySelector(".savedArticles-list");

const openSavedArticles = e => {
  articleListContainer.classList.add("hidden");
  console.log(persistedArticles.articles);
};

seeLateLink.addEventListener("click", openSavedArticles);
