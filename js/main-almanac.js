document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentIndex = 0;

  function showCurrentItem() {
    carouselItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function showNextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCurrentItem();
  }

  function showPrevItem() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showCurrentItem();
  }

  // Show the initial item
  showCurrentItem();

  // Add click event listeners to buttons
  nextButton.addEventListener("click", showNextItem);
  prevButton.addEventListener("click", showPrevItem);
});
