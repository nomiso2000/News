const burgerBox = document.querySelector(".burger-box");
const navigation = document.querySelector(".navigation");

const activate = e => {
  if (navigation.classList.contains("visible")) {
    navigation.classList.remove("visible");
    return;
  }
  navigation.classList.add("visible");
};

burgerBox.addEventListener("click", activate);
