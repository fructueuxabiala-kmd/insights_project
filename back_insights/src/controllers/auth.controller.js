import{ registerUser,getUserProfile,loginUser,updateUserProfile } from "../services/auth.service.js"

export async function register(req,res,next){
    try {
        const user = await registerUser(req.body)
        return res.status(200).json({data: user})
    } catch (err) {
        return next(err)
    }

}

export async function login(req,res,next){
    try {
      const result = await loginUser(req.body ?? {});  
      return res.status(200).json({data: result});
    } catch (err) {
        return next(err)
    }
}

export const getMe = async (req, res) => {
  try {
    const user = await getUserProfile(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: "Utilisateur non trouvé" });
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const userId = req.user.sub; // venant du middleware JWT
    const updatedUser = await updateUserProfile(userId, req.body);

    res.json({
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (err) {
    next(err);
  }
};