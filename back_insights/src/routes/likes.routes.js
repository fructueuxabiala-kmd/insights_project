import Router from "express"
import { handleLike } from "../controllers/likes.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";



const router = Router()


// Liker / Unliker une citation
router.post('/:id/like',requireAuth, handleLike);

export default router