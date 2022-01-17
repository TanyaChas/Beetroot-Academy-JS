const uuid = require("uuid")

const tags = [
  {
    id: uuid(),
    name: "dragons",
  },
  {
    id: uuid(),
    name: "coffee",
  },
]

exports.seed = async function(knex) {
  await knex("tags").del()

  return Promise.all(tags.map(a => knex("tags").insert(a)))
}
