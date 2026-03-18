import { Bookmark } from "../models/Bookmark.js";

export const toggleBookmark = async (quoteId, userId) => {
  const existing = await Bookmark.findOne({
    user: userId,
    quote: quoteId
  });

  if (existing) {
    await existing.deleteOne();
    return { bookmarked: false };
  }

  await Bookmark.create({ user: userId, quote: quoteId });
  return { bookmarked: true };
};

export const getUserBookmarks = async (userId) => {
  return await Bookmark.find({ user: userId })
    .populate({
      path: "quote",
      populate: {
        path: "author",
        select: "username avatar"
      }
    });
};