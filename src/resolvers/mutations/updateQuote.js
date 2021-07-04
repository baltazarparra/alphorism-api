const { ApolloError } = require('apollo-server')

module.exports = async (_, { id, input }, { models }) => {
    try {
        const quoteToUpdate = await models.Quote.findOne({ _id: id })

        if (!quoteToUpdate) throw new ApolloError(`Could not find quote with id: '${id}'.`, 400)

        Object.keys(input).forEach(value => {
            quoteToUpdate[value] = input[value]
        })

        const updatedQuote = await quoteToUpdate.save()

        return updatedQuote
    } catch(e) {
        throw new ApolloError(e)
    }
}