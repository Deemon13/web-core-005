const brands = [
  {
    src: "./images/brands/lenovo.png",
    alt: "lenovo-logo",
  },
  {
    src: "./images/brands/samsung.png",
    alt: "samsung-logo",
  },
  {
    src: "./images/brands/apple.png",
    alt: "apple-logo",
  },
  {
    src: "./images/brands/viewsonic.png",
    alt: "viewsonic-logo",
  },
  {
    src: "./images/brands/bosch.png",
    alt: "bosch-logo",
  },
];

let showBtn = document.querySelector(".show");
let showIcon = showBtn.querySelector(".show__icon");
let brandsList = document.querySelector(".brands__list");

const markup = brands
  .map(
    ({ src, alt }) => `<li class="brands__item--showing">
          <a href="#" class="swiper-slide__block link">
            <img
              class="swiper-slide__logo"
              src="${src}"
              alt="${alt}"
            />
            <img
              class="swiper-slide__icon"
              src="./images/icons/go.png"
              alt="go-icon"
              width="40"
              height="40"
            />
          </a>
        </li>`
  )
  .join("");

const handleClickOnHideBtn = function () {
  showBtn.removeEventListener("click", handleClickOnHideBtn);
  showBtn.className = "link show";
  showBtn.lastElementChild.textContent = "Показать все";
  showBtn.addEventListener("click", handleClickOnShowBtn);
  showIcon.classList.remove("show__icon--rotate");
  document
    .querySelectorAll(".brands__item--showing")
    .forEach((elem) => elem.remove());
};

const handleClickOnShowBtn = function () {
  showBtn.lastElementChild.textContent = "Скрыть";
  showBtn.className = "link hide";
  showBtn.removeEventListener("click", handleClickOnShowBtn);
  showBtn.addEventListener("click", handleClickOnHideBtn);
  showIcon.classList.add("show__icon--rotate");
  brandsList.insertAdjacentHTML("beforeend", markup);
};

showBtn.addEventListener("click", handleClickOnShowBtn);
