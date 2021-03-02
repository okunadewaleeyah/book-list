var books = [
    {title: 'to catch a mockingbird', author: 'Mike Jameson', publisher: 'penguin'},
    {title: 'Slender Man', author: 'H. G. Wells', publisher: 'Private'},
    {title: 'Rick and Morty', author: 'Don Harmon and Justin Roiland', publisher: 'Adult Swim'},
    {title: 'Family Guy', author: 'seth MacFarlane', publisher: 'Fox TV'},
    {title: 'American Dad', author: 'seth MacFarlane', publisher: 'penguin'},
    {title: 'to catch a predator', author: 'Mike Upton', publisher: 'some dude?'},
]


var searchButton = document.getElementById('search')
var refreshButton = document.getElementById('refresh')
var inputText = document.getElementById('input-area')

function lookForMatch(book) {
    if(inputText = '') {
        return book 
    } else {
        
    }
}

function findBook(book) {

}
    
function displaySearch() {
    document.getElementById('search-output').innerHTML = books.find(findBook)
}

function refreshPage() {

}


searchButton.addEventListener('click', button => {
    findBook(),
    displaySearch()
    console.log('search')
})

refreshButton.addEventListener('click', button => {
    refreshPage() 
    console.log('refresh')
})