import * as BookmarkService from "../services/bookmark.service.js";


// Ajouter / retirer favoris
export const toggle = async (req, res, next) => {
  try {
    const result = await BookmarkService.toggleBookmark(
      req.params.quoteId,
      req.user.sub
    );

    res.json(result);
  } catch (err) {
    next(err);
  }
};


// Voir mes favoris
export const myBookmarks = async (req, res, next) => {
  try {
    const bookmarks = await BookmarkService.getUserBookmarks(
      req.user.sub
    );

    res.json(bookmarks);
  } catch (err) {
    next(err);
  }
};