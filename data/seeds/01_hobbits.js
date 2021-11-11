exports.seed = function (knex) {
  return knex("hobbits").insert([
    { name: "sam" },
    { name: "frodo" },
    { name: "pippin" },
    { name: "merry" },
  ]);
};
