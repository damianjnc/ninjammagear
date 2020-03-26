const mutations = {
  async createItem(parent, args, context, info) {
    // todo check if they are log in
    const item = await context.db.createItem(
      {
        data: {
          ...args
        }
      },
      info
    )

    console.log(item)
    return item
  }
}

module.exports = mutations
