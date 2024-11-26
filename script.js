document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
  
    hamburger.addEventListener('click', () => {
      navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    });
  
    const searchInput = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search-btn');
  
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
      }
    });
  });
  