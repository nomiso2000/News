const scrollTopButton = document.querySelector(".scrollTopButton");
const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export const scrollToArtList = (behavior, top) => {
  if (window.innerWidth < 768) {
    window.scrollTo({
      top: 130,
      behavior
    });
    return;
  }
  window.scrollTo({
    top,
    behavior
  });
};

const showButton = () => {
  if (document.documentElement.scrollTop > 400) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
};
scrollTopButton.addEventListener("click", scrollToTop);
window.addEventListener("scroll", showButton);
