document.addEventListener("DOMContentLoaded", () => {
  const indicators = document.querySelectorAll('.carousel-indicators button');
  const items = document.querySelectorAll('.carousel-item');

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      // Remove active class from all indicators and items
      indicators.forEach(ind => ind.classList.remove('active'));
      items.forEach(item => item.classList.remove('active'));

      // Add active class to the clicked indicator and corresponding item
      indicator.classList.add('active');
      items[index].classList.add('active');
    });
  });
});

