// Reviews Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
  const reviewCards = document.querySelectorAll('.review-card');
  const prevBtns = document.querySelectorAll('.review-nav-btn.prev-btn');
  const nextBtns = document.querySelectorAll('.review-nav-btn.next-btn');
  const reviewsCarousel = document.querySelector('.reviews-carousel');
  let currentIndex = 0;

  // Function to update carousel height based on active card (mobile only)
  function updateCarouselHeight() {
    if (window.innerWidth <= 799 && reviewsCarousel) {
      const activeCard = reviewsCarousel.querySelector('.review-card.active');
      if (activeCard) {
        // Temporarily make it relative to measure height
        const wasAbsolute = activeCard.style.position === 'absolute';
        activeCard.style.position = 'relative';
        const height = activeCard.offsetHeight;
        activeCard.style.position = wasAbsolute ? 'absolute' : '';
        
        // Set carousel height to match active card
        reviewsCarousel.style.height = height + 'px';
      }
    }
  }

  // Function to show a specific review
  function showReview(index) {
    // Remove active class from all cards
    reviewCards.forEach(card => {
      card.classList.remove('active');
    });
    
    // Add active class to current card
    if (reviewCards[index]) {
      reviewCards[index].classList.add('active');
    }
    
    currentIndex = index;
    
    // Update carousel height on mobile
    setTimeout(updateCarouselHeight, 50);
  }

  // Previous button click handlers (handle all prev buttons)
  prevBtns.forEach(prevBtn => {
    prevBtn.addEventListener('click', function() {
      const newIndex = currentIndex === 0 ? reviewCards.length - 1 : currentIndex - 1;
      showReview(newIndex);
    });
  });

  // Next button click handlers (handle all next buttons)
  nextBtns.forEach(nextBtn => {
    nextBtn.addEventListener('click', function() {
      const newIndex = currentIndex === reviewCards.length - 1 ? 0 : currentIndex + 1;
      showReview(newIndex);
    });
  });

  // Initialize: show first review
  if (reviewCards.length > 0) {
    showReview(0);
  }
  
  // Update height on window resize
  window.addEventListener('resize', updateCarouselHeight);
});



