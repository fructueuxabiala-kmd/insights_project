import { Quote } from "../models/Quote.js";

export const isQuoteAuthor = async (req, res, next) => {
  try {
    const quoteId = req.params.id;

    // récupérer la citation
    const quote = await Quote.findById(quoteId);

    if (!quote) {
      return res.status(404).json({
        error: { message: "Quote not found" }
      });
    }

    // req.user vient du middleware requireAuth
    const userId = req.user.sub;

    // vérifier si l'utilisateur est l'auteur
    if (quote.author.toString() !== userId) {
      return res.status(403).json({
        error: { message: "Forbidden: you are not the author of this quote" }
      });
    }

    // optionnel : rendre la quote disponible plus tard
    req.quote = quote;

    next();
  } catch (err) {
    next(err);
  }
};