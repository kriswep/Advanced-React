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
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // find item
    const item = await ctx.db.query.item({ where }, `{id title}`);
    // check ownersip or permission
    // TODO
    // delete it
    return ctx.db.mutation.deleteItem({ where }, info);
  },
};

module.exports = Mutations;
