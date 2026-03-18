import { Comment } from "../models/Comment.js";

export const addComment = async (quoteId, userId, text) => {
  return await Comment.create({
    quote: quoteId,
    author: userId,
    text
  });
};

export const getComments = async (quoteId) => {
  return await Comment.find({ quote: quoteId })
    .populate("author", "username avatar");
};

export const deleteComment = async (commentId, userId) => {
  const comment = await Comment.findById(commentId);

  if (!comment) throw new Error("Comment not found");

  if (comment.author.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  await comment.deleteOne();
};