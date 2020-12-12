import * as API from "../server/API";
import articleTmp from "../templates/Article.hbs";
import mapper from "./helpers/mapper";
import spinnerBox from "./spinner/spinner";
import "./helpers/scrollToTop";
import chunkArray from "./helpers/chunkArray";

export const articleList = document.querySelector(".articleList");

export const articlesParams = {
  page: 0,
  savedArticles: []
};

export const fetchArticles = sectionName => {
  API.getItems(sectionName)
    .then(({ data }) => {
      return saveArticles(mapper(data.results));
    })
    .then(articles => {
      createMarkup(articles[articlesParams.page]);
    })
    .catch(err => console.error(err))
    .finally(() => {
      spinnerBox.classList.add("hidden");
    });
};

const saveArticles = articles =>
  (articlesParams.savedArticles = chunkArray([...articles], 12));

export const createMarkup = articles => {
  articleList.innerHTML = "";
  const markup = articles.map(article => articleTmp(article));
  articleList.insertAdjacentHTML("beforeend", markup.join(""));
};

fetchArticles();
