const { MyList } = require("../helper/relation");
module.exports = {
  createMyList: async (req, res) => {
    try {
      const data = await MyList.create({
        userId: req.body.userId,
        moviesId: req.body.moviesId,
        date: req.body.date,
        image: req.body.image,
        title: req.body.title,
        duration: req.body.duration,
        overview: req.body.overview,
        rating: req.body.rating,
        genre: req.body.genre,
        casting: req.body.casting,
      });
      res.status(202).json({ message: "succes save mylist", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  deleteMyList: async (req, res) => {
    try {
      const data = await MyList.destroy({
        where: { id: req.params.id },
      });
      res.status(202).json({ message: "succes delete mylist" });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  getOneMyList: async (req, res) => {
    try {
      const data = await MyList.findOne({
        where: { userId: req.query.userId, moviesId: req.query.moviesId },
      });
      res.status(202).json({ message: "succes get one mylist", data: data });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
};
