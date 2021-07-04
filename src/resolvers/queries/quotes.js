module.exports = async (_, {}, { models }) => {
    return await models.Quote.find()
}