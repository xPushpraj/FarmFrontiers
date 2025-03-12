document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.carousel-track');
      const slides = Array.from(track.children);
      const dotsContainer = carousel.querySelector('.carousel-dots');
      let currentIndex = 0;
  
      // Create dots
      slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
  
      // Navigation functions
      const goToSlide = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        updateDots();
      };
  
      const updateDots = () => {
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      };
  
      // Button controls
      carousel.querySelector('.carousel-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
      });
  
      carousel.querySelector('.carousel-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
      });
  
      // Auto-advance (optional)
      setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
      }, 5000);
    });
  });

  let touchStartX = 0;
track.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});

track.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX - touchEndX;
  
  if(Math.abs(diff) > 50) {
    if(diff > 0) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    goToSlide(currentIndex);
  }
});