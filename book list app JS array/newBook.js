const form = document.querySelector('form')
const ol = document.querySelector('ol')
const clearAll = document.getElementById('clear-all')
const input = document.getElementById('item')
const link = document.querySelector('a')
link.style.color = 'black'

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
let books

if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'))
} else {
  books = []
}