import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3
    },
    email: {
        type: String,
        required: true,
        trim: true, 
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    avatar: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        required: true,
        enum: ["users"],
        default: "users"
    }
}, {timestamps: true}

)

// Enlever le password hashé du res.json

userSchema.set("toJSON",{
    transform: (doc,ret)=>{
        delete ret.password
        return ret;
    }

}
)

export const User = mongoose.model("User", userSchema)