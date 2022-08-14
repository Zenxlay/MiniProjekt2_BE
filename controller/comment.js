const { Comment } = require("../helper/relation");
module.exports = {
  createComment: async (req, res) => {
    try {
      const data = await Comment.create({
        userId: req.body.userId,
        image: req.body.image,
        nama: req.body.nama,
        moviesId: req.body.moviesId,
        title: req.body.title,
        text_comment: req.body.text_comment,
        rating: req.body.rating,
      });
      res.status(202).json({ message: "succes comment", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  updateReview: async (req, res) => {
    try {
      const data = await Comment.update(
        {
          image: req.body.image,
          nama: req.body.nama,
          title: req.body.title,
          text_comment: req.body.text_comment,
          rating: req.body.rating,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.status(202).json({ message: "succes update comment", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  deleteComment: async (req, res) => {
    try {
      const data = await Comment.destroy({
        where: { id: req.params.id },
      });
      res.status(202).json({ message: "succes delete comment", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  getAllComment: async (req, res) => {
    try {
      const data = await Comment.findAll();
      res.status(202).json({ message: "succes get comment", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  getOneComment: async (req, res) => {
    try {
      const data = await Comment.findOne({
        where: { moviesId: req.query.moviesId, userId: req.query.userId },
      });
      res.status(202).json({ message: "succes get one comment", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
};
