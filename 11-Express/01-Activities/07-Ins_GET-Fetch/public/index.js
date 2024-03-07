console.log('hello');
const termEl = document.getElementById('terms');
const termButton = document.getElementById('term-btn');

// Invoked by the buttonHandler function to fetch terms from the data store
const getTerms = () =>
  fetch('/api/terms', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);


// Invoked by the forEach() method in the buttonHandler function to properly set up each term to be rendered to the index.html page
const renderTerm = (term) => {
  const cardEl = document.createElement('div');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');

  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');

  cardBodyTitle.innerHTML = `<a href=${term.url}>${term.term}</a>`;
  cardBodyEl.innerText = term.definition;
  termEl.appendChild(cardBodyTitle);
  termEl.appendChild(cardBodyEl);
};

// Event Listener calls this method to invoke the getTerms function and render each returned 'term' to the index.html page
const buttonHandler = () =>
  getTerms().then((response) => response.forEach((item) => renderTerm(item)));

// Event Listener invoked when the Fetch Terms button is clicked
termButton.addEventListener('click', buttonHandler);
