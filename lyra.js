const lyra = require('@lyrasearch/lyra')

const product = lyra.create({
    schema: {
        name: 'string',
        price: 'number',
        description: 'string',
        category: {
            name: 'string',
            description: 'string',
        },
        image: 'string',
        rating: 'number',
        numReviews: 'number',
        countInStock: 'number',
    },
})

const insert = async (schema, record) => {
    return await lyra.insert(await schema, record)
}

const insertBulk = async (schema, records, opts = {}) => {
    await lyra.insertBatch(await schema, records, {
        ...opts,
    })
}

const search = async (schema, query, language) => {
    return await lyra.search(await schema, query, language)
}

const remove = async (schema, id) => {
    return await lyra.remove(await schema, id)
}

module.exports = {
    product,
    insert,
    insertBulk,
    search,
    remove,
}