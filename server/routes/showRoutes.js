import express from "express";
import { addShow, getNowPlayingMovies, getShow, getShows } from "../controllers/showController.js";
import { protectAdmin } from "../middleware/auth.js";


const showRouter = express.Router();

showRouter.get('/now-playing',protectAdmin, getNowPlayingMovies);
showRouter.post('/add' ,protectAdmin , addShow)
showRouter.get('/all', getShows); // use GET for fetching all shows
showRouter.get('/:movieId', getShow); // use GET for fetching a specific movie's shows


export default showRouter;
