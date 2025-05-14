alert("Welcome to my hobbies page!");

    // 2) Example: fade in images as you scroll
const imgs = document.querySelectorAll(".gallery-row img");
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
    if (e.isIntersecting) {
        e.target.style.opacity = 1;
        obs.unobserve(e.target);
    }
    });
}, { threshold: 0.1 });

imgs.forEach(img => {
    img.style.opacity = 0.5;
    obs.observe(img);
});