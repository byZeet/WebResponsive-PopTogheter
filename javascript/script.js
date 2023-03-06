//Search Desplegable
const searchContainer = document.querySelector('.search-container');

searchContainer.addEventListener('mouseenter', () => {
  searchContainer.classList.add('expanded');
});

searchContainer.addEventListener('mouseleave', () => {
  searchContainer.classList.remove('expanded');
});
