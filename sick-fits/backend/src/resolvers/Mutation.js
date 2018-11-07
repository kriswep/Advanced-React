const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: auth

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info,
    );

    return item;
  },
  async updateItem(parent, args, ctx, info) {
    // copy the updated item
    const updates = { ...args };
    // no id
    delete updates.id;
    // update
    const item = await ctx.db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id },
      },
      info,
    );

    return item;
  },
};

module.exports = Mutations;
