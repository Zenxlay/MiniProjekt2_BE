const express = require("express");
const router = express.Router();
const commentController = require("../controller/Comment");

router.post(`/create_comment`, commentController.createComment);
router.put(`/update_comment/:id`, commentController.updateReview);
router.delete(`/delete_comment/:id`, commentController.deleteComment);
router.get(`/getAllComment`, commentController.getAllComment);
router.get(`/get_one_comment`, commentController.getOneComment);

module.exports = router;
