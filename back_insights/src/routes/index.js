import { Router } from "express";
import routerUsers from "./users.routes.js"
import routerQuotes from "./quotes.routes.js"
import routerComments from "./comments.routes.js"
import routerLikes from "./likes.routes.js"
import routerBookMarks from "./bookmarks.routes.js"
import routerAuth from "./auth.routes.js"

const router= Router()

router.use("/users", routerUsers)
router.use("/quotes", routerQuotes)
router.use("/comments", routerComments)
router.use("/likes", routerLikes)
router.use("/bookMarks", routerBookMarks)
router.use("/auth", routerAuth)

export default router