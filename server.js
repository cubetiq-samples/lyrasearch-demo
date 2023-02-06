const express = require('express')
const { product, insertBulk, search, insert } = require('./lyra')

const app = express()

const generateProducts = (count) => {
    const products = []
    for (let i = 0; i < count; i++) {
        products.push({
            name: "Product " + i,
            price: Math.floor(Math.random() * 1000),
            description: "Product " + i + " description",
            category: {
                name: "Category " + i,
                description: "Category " + i + " description",
            },
            image: "https://picsum.photos/200/300",
            rating: Math.floor(Math.random() * 5),
            numReviews: Math.floor(Math.random() * 100),
            countInStock: Math.floor(Math.random() * 100),
        })
    }
    return products
}

app.get('/', (req, res) => {
    res.json({
        msg: "OK"
    })
})

app.get('/api/products', async (req, res) => {
    const q = req.query.q || ''
    const result = await search(product, {
        term: q,
        properties: '*',
    })
    res.json(result)
})

app.get('/api/products/seed', async (req, res) => {
    const count = req.query.count || 100
    await insertBulk(product, generateProducts(count))
    res.json({
        msg: "OK",
        count: count,
        records: (await product).docs,
    })
})

module.exports = app