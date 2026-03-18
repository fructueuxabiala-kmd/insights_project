import bcrypt from "bcrypt"
import {User} from "../models/User.js"
import jwt from "jsonwebtoken"

const JWT_SECRET=process.env.JWT_SECRET ?? "dev_secret_change_me";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? "2h";

export async function registerUser({username,email,password,role,bio,avatar}){
    if(typeof username !== "string" || username.trim().length < 3){
        const err = new Error("username must be at least 2 characters");
        err.statusCode = 400;
        throw err;
    }
    if(typeof email !== "string" || !email.includes("@")){
        const err = new Error("email is invalid");
        err.statusCode = 400;
        throw err;
    }

    if(typeof password !== "string" || password.length < 6){
        const err = new Error("password must be at least 6 characters");
        err.statusCode = 400;
        throw err;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existing = await User.findOne({email: normalizedEmail});

    if(existing){
        const err = new Error("email already in use");
        err.statusCode = 409;
        throw err;
    }

    const passwordHash = await bcrypt.hash(password,10)
const user = await User.create({
    username: username.trim(),
    email: normalizedEmail,
    password:passwordHash, 
    bio,                      
    avatar,
    role
  });
    return user;
}

export async function loginUser({email,password}){
    if(typeof email!== "string" || typeof password !== "string"){
        const err = new Error("email and password required");
        err.statusCode = 400;
        throw err 
    }

    const normalizedEmail = email.trim().toLocaleLowerCase()
    const user = await User.findOne({email: normalizedEmail}).select("+password");
    if(!user){
        const err = new Error("Invalid Credentials");
        err.statusCode = 401;
        throw err
    }

    const ok = await bcrypt.compare(password, user.password)

    if(!ok){
        const err = new Error("Invalid Credentials")
        err.statusCode = 401;
        throw err;
    }

    const token = jwt.sign(
        {sub: String(user._id),role: user.role, email: user.email},
        JWT_SECRET,
        {expiresIn: JWT_EXPIRES_IN}
    );

    return {
        token,
        user: user.toJSON()
    }

}


export const getUserProfile = async (id) => {
  return await User.findById(id).select('-password'); // On exclut le mot de passe
};

// Fonction utilitaire pour le Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '30d' });
};


export async function updateUserProfile(userId, data) {
  const { username, email, password, bio, avatar } = data;

  // Vérifier que l'utilisateur existe
  const user = await User.findById(userId).select("+password");
  if (!user) {
    const err = new Error("User not found");
    err.statusCode = 404;
    throw err;
  }

  /* ======================
     VALIDATIONS
  ====================== */

  if (username !== undefined) {
    if (typeof username !== "string" || username.trim().length < 3) {
      const err = new Error("username must be at least 3 characters");
      err.statusCode = 400;
      throw err;
    }
    user.username = username.trim();
  }

  if (email !== undefined) {
    if (typeof email !== "string" || !email.includes("@")) {
      const err = new Error("email is invalid");
      err.statusCode = 400;
      throw err;
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Vérifier si email déjà utilisé par un autre user
    const existing = await User.findOne({
      email: normalizedEmail,
      _id: { $ne: userId }
    });

    if (existing) {
      const err = new Error("email already in use");
      err.statusCode = 409;
      throw err;
    }

    user.email = normalizedEmail;
  }

  // Mise à jour du mot de passe (optionnel)
  if (password !== undefined) {
    if (typeof password !== "string" || password.length < 6) {
      const err = new Error("password must be at least 6 characters");
      err.statusCode = 400;
      throw err;
    }

    user.password = await bcrypt.hash(password, 10);
  }

  if (bio !== undefined) {
    user.bio = bio;
  }

  if (avatar !== undefined) {
    user.avatar = avatar;
  }

  await user.save();

  return user.toJSON();
}


