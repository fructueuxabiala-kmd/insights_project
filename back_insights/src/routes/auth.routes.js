import Router from "express"
import { register, login,getMe } from "../controllers/auth.controller.js"
import { requireAuth } from "../middlewares/requireAuth.js"

const router = Router()

router.post("/register", register)
router.post("/login", login)
// Route protégée (pour récupérer ses propres infos)
router.get('/me',requireAuth,getMe);

export default router

