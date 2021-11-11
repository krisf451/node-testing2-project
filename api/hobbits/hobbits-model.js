const db = require("../../data/db-config");

module.exports = {
  getAll,
  getById,
  insert,
  remove,
  update,
};

function getAll() {
  return db("hobbits");
}
function getById(id) {
  return db("hobbits").where("id", id).first();
}
async function insert(hobbit) {
  const [id] = await db("hobbits").insert(hobbit);
  return getById(id);
}
async function remove(id) {
  const deletedHobbit = await getById(id);
  await db("hobbits").where("id", id).del();
  return deletedHobbit;
}
function update(id, changes) {
  return db("hobbits")
    .where("id", id)
    .update(changes)
    .then((count) => (count > 0 ? getById(id) : null));
}
