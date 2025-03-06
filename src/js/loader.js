const showWrapper = document.querySelector(".loader__wrapper");

export const showLoader = (status) => {
  if (status) {
    showWrapper.classList.remove("none");
  } else {
    showWrapper.classList.add("none");
  }
};
