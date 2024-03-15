const products = [
    { id: '1', catagoria: 'remeras', name: 'Remera', price: 12000, stock: 4, img: '../../public/remera.jpg' },
    { id: '2', catagoria: 'zapatillas', name: 'Zapatilla', price: 15000, stock: 2, img: '../../public/zapatilla.jpg' },
    { id: '3', catagoria: 'buzos', name: 'Buzo', price: 14000, stock: 6, img: '../../public/buzo.jpg' },
    { id: '4', catagoria: 'camperas', name: 'Campera', price: 17000, stock: 3, img: '../../public/campera.jpg' }
]

const mockFetch = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(id ? products.find(prod => prod.id === id): products)
        }, 1000)
    })
}

export default mockFetch