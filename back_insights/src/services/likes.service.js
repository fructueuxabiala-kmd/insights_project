import { Quote } from "../models/Quote.js";
import { Like } from "../models/Like.js";

export const toggleLike = async (quoteId, userId) => {
  // vérifier que la citation existe
  const quote = await Quote.findById(quoteId);
  if (!quote) {
    throw new Error("Citation introuvable");
  }

  // vérifier si déjà liké
  const existingLike = await Like.findOne({
    quote: quoteId,
    user: userId
  });

  let isLiked;

  if (existingLike) {
    // UNLIKE
    await Like.deleteOne({ _id: existingLike._id });

    quote.likesCount = Math.max(0, quote.likesCount - 1);
    isLiked = false;
  } else {
    // LIKE
    await Like.create({
      quote: quoteId,
      user: userId
    });

    quote.likesCount += 1;
    isLiked = true;
  }

  await quote.save();

  return {
    likesCount: quote.likesCount,
    isLiked
  };
};