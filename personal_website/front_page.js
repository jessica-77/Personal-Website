new Swiper('.photo-wrapper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});

function revealFact(id) {
  const fact = document.getElementById(id);
  fact.style.display = fact.style.display === "block" ? "none" : "block";
}
