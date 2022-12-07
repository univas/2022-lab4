

const LOCAL_KEY = 'my-chart'

const start = () => {
    updateChartItems()
}

const updateChartItems = () => {
    const items = localStorage.getItem(LOCAL_KEY)
    if (items) {
        const books = JSON.parse(items)
        document.getElementById('quantity').innerHTML = books.length
        updateItems(books)
    }
}

const updateItems = books => {
    books.forEach(bookId => {
        const span = document.getElementById(bookId + 'Quantity')
        span.innerHTML = parseInt(span.innerHTML, 10) + 1
    })
}

start()