const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * GET /api/comments
 * Retrieves all comments from the database
 * @returns {Array} Array of comment objects
 */
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().populate("author").exec();
    return res.json({ comments });
  } catch (err) {
    return res.status(500).json({ errors: { message: err.message } });
  }
});

/**
 * DELETE /api/comments/:id
 * Deletes a comment by its ID
 * @param {string} id - The comment ID to delete
 * @returns {Object} Success message or error
 */
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndRemove(req.params.id);
    if (!comment) {
      return res.status(404).json({ errors: { message: "Comment not found" } });
    }
    return res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    return res.status(500).json({ errors: { message: err.message } });
  }
});

module.exports = router;
