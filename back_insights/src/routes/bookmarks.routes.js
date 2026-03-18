import { Router } from "express";
import * as BookmarkController from "../controllers/bookmark.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

// ajouter / retirer favoris
router.post(
  "/:quoteId",
  requireAuth,
  BookmarkController.toggle
);

// voir mes favoris
router.get(
  "/me",
  requireAuth,
  BookmarkController.myBookmarks
);

export default router;