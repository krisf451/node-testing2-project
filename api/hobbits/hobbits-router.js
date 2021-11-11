const router = require("express").Router();
const Hobbits = require("./hobbits-model");

router.get("/", (req, res, next) => {
  Hobbits.getAll()
    .then((hobbits) => {
      res.status(200).json(hobbits);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Hobbits.getById(req.params.id)
    .then((hobbit) => {
      res.status(200).json(hobbit);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Hobbits.insert(req.body)
    .then((newHobbit) => {
      res.status(201).json(newHobbit);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Hobbits.remove(req.params.id)
    .then((removedHobbit) => {
      res.status(200).json(removedHobbit);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  Hobbits.update(req.params.id, req.body)
    .then((updatedHobbit) => {
      res.status(200).json(updatedHobbit);
    })
    .catch(next);
});

module.exports = router;
