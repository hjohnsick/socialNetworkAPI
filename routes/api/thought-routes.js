const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThoughts);

router.route("/:userId").post(addThought);

router.route("/:id").get(getThoughtById).put(updateThought);

router.route("/:userId/:thoughtId").put(addReaction).delete(deleteThought);
router
  .route("/:userId/:thoughtId/:reactionId/reactions")
  .delete(removeReaction);
module.exports = router;
