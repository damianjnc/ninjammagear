const Mutations = {
  async createItem(parent, args, context, info) {
    // todo check if they are log in
    const item = await context.db.mutation.createItem(
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

module.exports = Mutations
