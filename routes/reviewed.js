const express = require("express");
const router = express.Router();
const reviewedController = require("../controller/reviewed");

router.post(`/create_reviewed`, reviewedController.createReviewed);
router.put(`/update_reviewed/:id`, reviewedController.updateReviewed);
router.delete(`/delete_reviewed/:id`, reviewedController.deleteReviewed);
router.get(`/get_one_reviewed`, reviewedController.getOneReviewed);

module.exports = router;
