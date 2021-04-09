// book class: reps a book
class Book {
    constructor (title, author, publisher) {
        this.title = title
        this.author = author
        this.publisher = publisher
    }
}

// Ui class: handle UI 
class UI {
    static displayBooks() {
        const storedBooks = [
            {title: 'To catch a mockingbird', author: 'Mike Jameson', publisher: 'penguin'},
            {title: 'Slender Man', author: 'H. G. Wells', publisher: 'Private'},
            {title: 'Family Guy', author: 'seth MacFarlane', publisher: 'Fox TV'},
            {title: 'American Dad', author: 'seth MacFarlane', publisher: 'penguin'}
        ]
        const books = storedBooks

// calling addBookToList in the UI because it is responisble
// for adding the books to the table
        books.forEach((book) => UI.addBookToList(book))
    }
// static
    static addBookToList(book) {
        
        const list = document.getElementById('book-list')

        // create the table row element to put into the tbody
        const row = document.createElement('tr')
        row.style.color = 'emerald'
        row.style.fontFamily = 'cursive'

        // add columns
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.publisher}</td>
        <td><a href="" class="btn btn-danger btn-sm delete">X</a></td>
        `
        // append the row to the list
        list.appendChild(row)

    }

    static deleteBook(el) {
        // making sure what is clicked contains the class "delete"
        if(el.classList.contains('delete')) {
            // remove the whole row (the grandparentElement)
            el.parentElement.parentElement.remove()
        }
    }

    
// alerts: handle errors
// message for the actual text
// className to style it- green for sucess, red for danger
    static showAlert(message, className) {
        // build the div and insert it into the UI 
        //cos there's no placehodler for it in the html
        const div = document.createElement('div')
        //add className
        div.className = `alert alert-${className}`
        // adding the text, creating the text using textNode
        div.appendChild(document.createTextNode(message))
        //insertinh
        // grab the parent element i.e the container i.e the container div
        const container= document.querySelector('.container')
        // get the form
        const form = document.getElementById('nook-form')
        // insert the alert
        // take the parent element insert the div before the form
        container.insertBefore(div, form)
        // make the alert popup g0 away after 3secs
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }

    static clearFields() {
        // grab each value and clear it
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('publisher').value = ''
    }
}

//store class: local storage 

//events handlers: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//event to add book
document.getElementById('book-form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault()
    // get form values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const publisher = document.getElementById('publisher').value


    //form validation
    if(title === '' || author === '' || publisher === '') {
        UI.showAlert('pleaase fill all the boxes!', 'danger')
    } else {
        // instantiate book
    const book = new Book(title, author, publisher);

    // add book to UI
    UI.addBookToList(book)

    // clear input fields after submit
    UI.clearFields()
    }
    
})

// event to remove a book from UI and storage
// targeting the actual list event propagation?
document.getElementById('book-list').addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(e.target
    UI.deleteBook(e.target)
    
})