let books = [
    {title: 'to catch a mockingbird', author: 'Mike Jameson', publisher: 'penguin'},
    {title: 'Slender Man', author: 'H. G. Wells', publisher: 'Private'},
    {title: 'Rick and Morty', author: 'Don Harmon and Justin Roiland', publisher: 'Adult Swim'},
    {title: 'Family Guy', author: 'seth MacFarlane', publisher: 'Fox TV'},
    {title: 'American Dad', author: 'seth MacFarlane', publisher: 'penguin'},
    {title: 'to catch a predator', author: 'Mike Upton', publisher: 'some dude?'},
]

const searchField = document.querySelector('#search');
const searchResultsContainer = document.querySelector('#searchresult');
const addBook = document.querySelector('#add')
const html = document.querySelector('html')
html.style.backgroundColor = 'brown'

const link = document.querySelector('a')
link.style.color = 'white'

searchField.addEventListener('input', (e) => {
  
  // if input field is empty, clear the search results
  if(e.target.value === '') {
     searchResultsContainer.innerHTML = '';
     return;
  }
  
  // filter the books array
  const searchResults = books.filter(book => {
      return book.title.toLowerCase().includes(e.target.value.toLowerCase());
  });
  
  // before displaying the search results, clear the search results div
  searchResultsContainer.innerHTML = '';
  
  // display the book objects that include the text entered in input field
  searchResults.forEach((book, index) => {
     const p = document.createElement('p');
     p.style.color = 'lavender'
      p.style.fontFamily = 'cursive'
     p.textContent = (index + 1) + '. ' + 'Title: ' + book.title + '. ' + "\n" + 'Author: ' + book.author + '. ' + "\n" + 'Publisher: ' + book.publisher;
     searchResultsContainer.append(p)
  
  });
});
