import { createMarkup, articlesParams } from "./app";

const paginationBtn = document.querySelector(".pagination-container");
export const numberButtonTxt = document.querySelector(".pagination-number");
export const nextButton = document.querySelector(".nextButton");
const prevButton = document.querySelector(".prevButton");
const numberButton = document.querySelector(".pagination-btn-num");
import { scrollToArtList } from "./helpers/scrollToTop";

const changePage = ({ target }) => {
  if (target.classList.contains("nextButton")) {
    nextPage(target);
  } else if (target.classList.contains("prevButton")) {
    prevPage(target);
  }
  numberButtonTxt.textContent = `${articlesParams.page + 1}`;
  scrollToArtList("auto", 570);
};

const returnToFirstPage = e => {
  enableButton(nextButton);
  disableButton(prevButton);
  articlesParams.page = 0;
  createMarkup(articlesParams.savedArticles[articlesParams.page]);
  scrollToArtList("auto", 570);
};

const prevPage = button => {
  enableButton(nextButton);
  articlesParams.page -= 1;
  createMarkup(articlesParams.savedArticles[articlesParams.page]);
  if (!articlesParams.page) {
    disableButton(button);
  }
};

const nextPage = button => {
  if (articlesParams.page === articlesParams.savedArticles.length - 2) {
    disableButton(button);
  }
  enableButton(prevButton);
  articlesParams.page += 1;
  createMarkup(articlesParams.savedArticles[articlesParams.page]);
};

const disableButton = button => {
  button.setAttribute("disabled", "disabled");
};
export const enableButton = button => {
  button.removeAttribute("disabled");
};

paginationBtn.addEventListener("click", changePage);
numberButton.addEventListener("click", returnToFirstPage);
