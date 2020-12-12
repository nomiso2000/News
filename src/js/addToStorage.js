import { articleList } from "./app";

const buttonType = "addToStorageButton";

export const persistedArticles = {
  articles: []
};

const handleAddToStorage = ({ currentTarget, target }) => {
  if (target.dataset.type !== buttonType) return;
  getFromLocalStorage();
  if (!persistedArticles.articles.includes(target.dataset.articleid)) {
    persistedArticles.articles = [
      ...persistedArticles.articles,
      target.dataset.articleid
    ];
  }
  localStorage.setItem("itemId", JSON.stringify(persistedArticles.articles));
};

export const getFromLocalStorage = () => {
  const articlesFromLS = localStorage.getItem("itemId");
  if (articlesFromLS) {
    persistedArticles.articles = [...JSON.parse(articlesFromLS)];
  }
};

articleList.addEventListener("click", handleAddToStorage);
getFromLocalStorage();
