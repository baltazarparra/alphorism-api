const { ApolloError } = require('apollo-server')

module.exports = async (_, { input }, { models }) => {
    try {
        newQuote = await models.Quote.create(input)
        return newQuote
    } catch(e) {
        throw new ApolloError(e)
    }
}