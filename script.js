document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Function to check if an element is in viewport
    function checkFade() {
      fadeElements.forEach(element => {
        // Get the element's position relative to the viewport
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If the element is in the viewport
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    }
    
    // Run once on load
    checkFade();
    
    // Run on scroll
    window.addEventListener('scroll', checkFade);
  });