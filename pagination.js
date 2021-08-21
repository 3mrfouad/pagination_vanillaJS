/* Document elements */
const listItems = document.querySelectorAll('.list-item');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

/* Pagination constants */
const itemsPerPage = 5;
const listItemsCount = listItems.length ?? 0;
const pagesCount = Math.floor(listItemsCount / itemsPerPage);
const range = [...Array(itemsPerPage).keys()];
/* Pagination variables */
let currentPage = 1;
let offset = 0;

/* Initial load */

if (!offset) {
    previous.classList.add('isDisabled');
    range.forEach(item => listItems[item].classList.remove('hide'));
}

next.addEventListener('click', (e) => {
    e.preventDefault();
    range.forEach(item => listItems[(itemsPerPage * offset) + item].classList.add('hide'));
    offset++; currentPage++;
    range.forEach(item => listItems[(itemsPerPage * offset) + item].classList.remove('hide'));
    currentPage >= pagesCount ? next.classList.add('isDisabled') : previous.classList.remove('isDisabled')
});

previous.addEventListener('click', (e) => {
    e.preventDefault();
    range.forEach(item => listItems[(itemsPerPage * offset) + item].classList.add('hide'));
    offset--; currentPage--;
    range.forEach(item => listItems[(itemsPerPage * offset) + item].classList.remove('hide'));
    currentPage <= 1 ? previous.classList.add('isDisabled') : next.classList.remove('isDisabled');
});


