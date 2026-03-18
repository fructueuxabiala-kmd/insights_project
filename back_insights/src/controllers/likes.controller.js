import { toggleLike } from "../services/likes.service.js";

 export const handleLike = async (req, res) => {
  try {
    const result = await toggleLike(
      req.params.id,
      req.user.sub  
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};