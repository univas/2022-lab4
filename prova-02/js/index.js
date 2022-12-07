const LOCAL_KEY = 'my-chart'

const start = () => {
    const buyButtons = document.getElementsByClassName('buyButton')
    Array.from(buyButtons).forEach(button => button.onclick = buyEventClick)

    updateChartItems()
}

const buyEventClick = event => {
    const button = event.target
    const img = button.parentNode.children[0]
    const items = localStorage.getItem(LOCAL_KEY)
    let quantity = 1
    if (!items) {
        const books = [img.id]
        localStorage.setItem(LOCAL_KEY, JSON.stringify(books))

    } else {
        const books = JSON.parse(items)
        books.push(img.id)
        quantity = books.length
        localStorage.setItem(LOCAL_KEY, JSON.stringify(books))
    }

    document.getElementById('quantity').innerHTML = quantity
}

const updateChartItems = () => {
    const items = localStorage.getItem(LOCAL_KEY)
    if (items) {
        const books = JSON.parse(items)
        document.getElementById('quantity').innerHTML = books.length
    }
}

start()