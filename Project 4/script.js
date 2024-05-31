
// navbar 
window.addEventListener('scroll', function() {
  var topNav = document.querySelector('.top-nav');
  var bottomNav = document.querySelector('.bottom-nav');

  if (window.scrollY > topNav.clientHeight) {
    bottomNav.style.position = 'fixed';
    bottomNav.style.top = '0';
    bottomNav.style.left = '0';
    bottomNav.style.width = '100%';
    topNav.style.marginBottom = bottomNav.clientHeight + 'px';
  } else {
    bottomNav.style.position = 'static';
    topNav.style.marginBottom = '0';
  }
});

// overlay 
const overlayBtn = document.getElementById('overlay-btn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');


overlayBtn.addEventListener('click', function() {
  overlay.style.display = 'block'; 
});


closeBtn.addEventListener('click', function() {
  overlay.style.display = 'none'; 
});

// first-section slider 
document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[n].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.getElementById("nextBtn").addEventListener("click", nextSlide);
    document.getElementById("prevBtn").addEventListener("click", prevSlide);

    showSlide(currentSlide); // Show the initial slide
});

// Third-Section 
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
  
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Remove 'selected' class from all buttons
        filterBtns.forEach(function(btn) {
          btn.classList.remove('selected');
        });
        
        // Add 'selected' class to the clicked button
        this.classList.add('selected');
      });
    });
  });

//  Third-Section Category 
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
  
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const filter = btn.dataset.filter;
  
        productItems.forEach(function(item) {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
  




// Fifth Section Slider
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('product-container');
  const items = document.querySelectorAll('.fifth-item');
  const fwdBtn = document.getElementById('fwd-btn');
  const bkBtn = document.getElementById('bwk-btn');
  let currentIndex = 0;

  // Function to show the items
  function showItems() {
      items.forEach((item, index) => {
          if (index >= currentIndex && index < currentIndex + 4) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  }

  // Show initial items
  showItems();

  // Forward button event listener
  fwdBtn.addEventListener('click', function() {
      currentIndex += 1;
      if (currentIndex > items.length - 4) {
          currentIndex = 0;
      }
      showItems();
  });

  // Backward button event listener
  bkBtn.addEventListener('click', function() {
      currentIndex -= 1;
      if (currentIndex < 0) {
          currentIndex = items.length - 4;
      }
      showItems();
  });
});


  
// Nine Slider 
document.addEventListener('DOMContentLoaded', function() {
  const reviews = document.querySelectorAll('.review');
  const nextBtn = document.getElementById('fd-btn');
  const prevBtn = document.getElementById('bk-btn');
  let currentIndex = 0;

  // Display initial reviews
  showReviews();

  // Show the next review
  nextBtn.addEventListener('click', function() {
      currentIndex++;
      if (currentIndex >= reviews.length) {
          currentIndex = 0; // Reset to the first review if the index exceeds the number of reviews
      }
      showReviews();
  });

  // Show the previous review
  prevBtn.addEventListener('click', function() {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = reviews.length - 1; // Set index to the last review if it goes below 0
      }
      showReviews();
  });

  // Function to display reviews based on the current index
  function showReviews() {
      reviews.forEach(function(review, index) {
          if (index === currentIndex || index === (currentIndex + 1) % reviews.length) {
              review.classList.add('active');
          } else {
              review.classList.remove('active');
          }
      });
  }
});
