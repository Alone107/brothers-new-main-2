const swiperReviewsHome = document.querySelector(".swiper-reviews-home");

if (swiperReviewsHome) {
  const swiperReviewsHome = new Swiper(".swiper-reviews-home", {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.3,
    spaceBetween: 30,

    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-prev-reviews-home",
      prevEl: ".swiper-button-next-reviews-home",
    },
  });
}

const swiperNewsHome = document.querySelector(".swiper-news-home");

if (swiperNewsHome) {
  const swiperNewsHome = new Swiper(".swiper-news-home", {
    // Optional parameters
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 15,

    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 1.9,
        spaceBetween: 15,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-prev-news-home",
      prevEl: ".swiper-button-next-news-home",
    },
  });
}

const swiperProject = document.querySelector(".swiper-project");

if (swiperProject) {
  const swiperProject = new Swiper(".swiper-project", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    autoplay: {
      delay: 5000, // задержка в миллисекундах между слайдами
    },
  });
}

// ---------burger-----------------

const burgerBtn = document.getElementById("burger");
const HeaderMenu = document.getElementById("header-menu");
const burgerClose = document.getElementById("close-burger");

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    HeaderMenu.classList.add("show");
  });

  burgerClose.addEventListener("click", CloseMenu);

  function CloseMenu() {
    HeaderMenu.classList.remove("show");
  }
  // Обработчик клика вне меню
  document.addEventListener("click", function (event) {
    const isClickOutside =
      !HeaderMenu.contains(event.target) && !burgerBtn.contains(event.target); // Исключаем саму кнопку бургера

    const isOpen = HeaderMenu.classList.contains("show");

    if (isClickOutside && isOpen) {
      CloseMenu();
    }
  });
}

const investBtn = document.getElementById("invest-btn");
const bannerInvest = document.querySelector(".banner-invest");
const bannerInvestBlock = document.querySelector(".banner-invest-block");

if (investBtn && bannerInvest) {
  // Открытие при клике на кнопку
  investBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события
    bannerInvest.classList.add("show");
  });

  // Закрытие при клике мимо
  document.addEventListener("click", (event) => {
    if (
      !bannerInvestBlock.contains(event.target) &&
      !investBtn.contains(event.target)
    ) {
      bannerInvest.classList.remove("show");
    }
  });
}

const merchBtn = document.getElementById("merch-btn");
const bannerMerch = document.querySelector(".banner-merch");
const bannerMerchBlock = document.querySelector(".banner-merch-block");

if (merchBtn && bannerMerch) {
  // Открытие при клике на кнопку
  merchBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события
    bannerMerch.classList.add("show");
  });

  // Закрытие при клике мимо
  document.addEventListener("click", (event) => {
    if (
      !bannerMerchBlock.contains(event.target) &&
      !merchBtn.contains(event.target)
    ) {
      bannerMerch.classList.remove("show");
    }
  });
}

const gridItem13 = document.querySelector(".grid-item-13");
const bannerZapros = document.querySelector(".banner-zapros");

if (gridItem13 && bannerZapros) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bannerZapros.classList.add("show");
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.5, // Добавим класс, когда элемент будет виден на 50%
    }
  );

  const bannerZaprosBlock = document.querySelector(".banner-zapros-block");

  // Закрытие при клике мимо
  document.addEventListener("click", (event) => {
    if (!bannerZaprosBlock.contains(event.target)) {
      bannerZapros.classList.remove("show");
    }
  });

  observer.observe(gridItem13);
}

const projectWrap = document.querySelector(".project");
const bannerZaprosTwo = document.querySelector(".banner-zapros-2");

if (projectWrap && bannerZaprosTwo) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bannerZaprosTwo.classList.add("show");
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.5, // Добавим класс, когда элемент будет виден на 50%
    }
  );

  const bannerZaprosBlock = document.querySelector(".banner-zapros-block");

  // Закрытие при клике мимо
  document.addEventListener("click", (event) => {
    if (!bannerZaprosBlock.contains(event.target)) {
      bannerZaprosTwo.classList.remove("show");
    }
  });

  observer.observe(projectWrap);
}

// ---------------Mural-slider-----------------

const swiperMural = document.querySelector(".swiper-mural");

if (swiperMural) {
  const swiperMural = new Swiper(".swiper-mural", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
