const express = require("express");
const router = express.Router();
const controllerMovies = require("../controller/movies");

// router.post("/create_movies", controllerMovies.createMovies);
// router.get("/get_one_movies/:id", controllerMovies.getFilmById);

router.get("/get_movies/:genreId/:page", controllerMovies.getMovies);
router.get("/get_top", controllerMovies.getTopAiring);
router.get("/get_genre", controllerMovies.getGenre);
router.get("/get_detail/:id", controllerMovies.getDetail);
router.get("/get_casting/:id", controllerMovies.getCasting);
router.get("/get_trailer/:id", controllerMovies.getTrailer);
router.get("/get_search/:query", controllerMovies.getSearch);
router.get("/get_tvSeries/:page", controllerMovies.getTvSeries);
router.get("/getOneTv/:id", controllerMovies.getOneTvSeries);
router.get("/get_casting_tv/:id", controllerMovies.getCastingTv);
router.get("/get_trailer_tv/:id", controllerMovies.getTrailerTv);

module.exports = router;
