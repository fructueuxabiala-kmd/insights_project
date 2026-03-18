import { Router } from "express";
import * as CommentController from "../controllers/comments.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

// commentaires d'une quote
router.get("/quote/:quoteId", CommentController.findByQuote);

// ajouter commentaire
router.post(
  "/quote/:quoteId",
  requireAuth,
  CommentController.create
);

// supprimer commentaire
router.delete(
  "/:id",
  requireAuth,
  CommentController.deleteComment
);

export default router;