const { Reviewed } = require("../helper/relation");
module.exports = {
  createReviewed: async (req, res) => {
    try {
      const data = await Reviewed.create({
        userId: req.body.userId,
        moviesId: req.body.moviesId,
        date: req.body.date,
        image: req.body.image,
        title: req.body.title,
        overview: req.body.overview,
        rating: req.body.rating,
        genre: req.body.genre,
        casting: req.body.casting,
      });
      res.status(202).json({ message: "succes create Reviewed", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },

  updateReviewed: async (req, res) => {
    try {
      const data = await Reviewed.update(
        {
          userId: req.body.userId,
          moviesId: req.body.moviesId,
          date: req.body.date,
          duration: req.body.duration,
          image: req.body.image,
          title: req.body.title,
          overview: req.body.overview,
          rating: req.body.rating,
          genre: req.body.genre,
          casting: req.body.casting,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.status(202).json({ message: "succes update Reviewed" });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  deleteReviewed: async (req, res) => {
    try {
      const data = await Reviewed.destroy({
        where: { id: req.params.id },
      });
      res.status(202).json({ message: "succes delete Reviewed" });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  getOneReviewed: async (req, res) => {
    try {
      const data = await Reviewed.findOne({
        where: { userId: req.query.userId, moviesId: req.query.moviesId },
      });
      res.status(202).json({ message: "succes get one Reviewed", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
};
