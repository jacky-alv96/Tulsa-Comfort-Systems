// Reviews Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
  const reviewCards = document.querySelectorAll('.review-card');
  const prevBtn = document.querySelector('.review-nav-btn.prev-btn');
  const nextBtn = document.querySelector('.review-nav-btn.next-btn');
  let currentIndex = 0;

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
  }

  // Previous button click handler
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      const newIndex = currentIndex === 0 ? reviewCards.length - 1 : currentIndex - 1;
      showReview(newIndex);
    });
  }

  // Next button click handler
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      const newIndex = currentIndex === reviewCards.length - 1 ? 0 : currentIndex + 1;
      showReview(newIndex);
    });
  }

  // Initialize: show first review
  if (reviewCards.length > 0) {
    showReview(0);
  }
});



