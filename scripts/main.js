(() => {
  const toggleButtons = document.querySelectorAll('.nav-toggle');
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nav = button.parentElement.querySelector('.main-nav');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  });

  const sliderButtons = document.querySelectorAll('.slider-btn');
  sliderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.sliderTarget;
      const direction = button.dataset.direction;
      const slider = document.getElementById(targetId);
      if (!slider) return;
      const amount = Math.max(280, Math.floor(slider.clientWidth * 0.8));
      slider.scrollBy({
        left: direction === 'next' ? amount : -amount,
        behavior: 'smooth'
      });
    });
  });
})();
