const { ApolloError } = require('apollo-server')

module.exports = async (_, { id }, { models }) => {
    const deleteQuote = await models.Quote.deleteOne({ _id: id })

    if (deleteQuote.deleteCount) return { id: id }
    else throw new ApolloError('Failed to delete.')
}