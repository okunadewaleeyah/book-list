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
     p.style.color = 'brown'
     p.style.fontFamily = 'cursive'
     p.textContent = (index + 1) + '. ' + 'Title: ' + book.title + '. ' + "\n" + 'Author: ' + book.author + '. ' + "\n" + 'Publisher: ' + book.publisher;
     searchResultsContainer.append(p)
  
  });
});

// ADDing NEW BOOKS

const form = document.querySelector('new-books')
const ol = document.querySelector('ol')
const clearAll = document.getElementById('clear-all')
const input = document.getElementById('item')

// creating a function that creates a list element. li sets the text of the element
//to the parameter and appends the item to ol
const creatList = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ol.appendChild(li)
  }

//adding an event listener to the form and the add button
form.addEventListener('submit', function(e) {
    e.preventDefault() // to prevent default submitting actions such as reloading page
    
    // calling createList creates the item with the text of the input.value
    // and appends it to the DOm
    // setting input.value to '' means i don't have to erase last item
    creatList(input.value)
    input.value = ''
})

// an empty array to store our input values
let bookArray = []

// localestorage
//using json.stringify cos localestorage only accepts strings
localStorage.setItem('books', JSON.stringify(bookArray))
const data = JSON.parse(localStorage.getItem('books'))

// pushing new input into the array
// setting localsstorage to the new updated value
bookArray.push(input.value)
localStorage.setItem('books', JSON.stringify(bookArray))

// running creatList() again to display existing stored info
// everytime the app is opened
data.forEach((item) => {
    creatList(item)
})

// adding the click event istener to the clear all button
// clearing from localstorage while clearing from list
clearAll.addEventListener('click', function () {
    localStorage.clear()
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild)
    }
})

// bookArray is being set to empty everytime script runs
let newBooks

if (localStorage.getItem('newBooks')) {
    newBooks = JSON.parse(localStorage.getItem('newBooks'))
} else {
    newBooks = []
}
