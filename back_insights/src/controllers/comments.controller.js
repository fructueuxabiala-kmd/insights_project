import * as CommentService from "../services/comments.service.js";


// Ajouter un commentaire
export const create = async (req, res, next) => {
  try {
    const comment = await CommentService.addComment(
      req.params.quoteId,
      req.user.sub,
      req.body.text
    );

    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};


// Récupérer les commentaires d'une quote
export const findByQuote = async (req, res, next) => {
  try {
    const comments = await CommentService.getComments(
      req.params.quoteId
    );

    res.json(comments);
  } catch (err) {
    next(err);
  }
};


// Supprimer un commentaire
export const deleteComment = async (req, res, next) => {
  try {
    await CommentService.deleteComment(
      req.params.id,
      req.user.sub
    );

    res.json({ message: "Comment deleted" });
  } catch (err) {
    next(err);
  }
};