import mongoose from "mongoose";

const {Schema} = mongoose

const quoteSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minlength : 3
    },
    image: {
        type: String,
        required: false,
        trim: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tags: {
        type: String,
        required: true,
        trim: true
    },
    likesCount: {
        type: Number,
        min: 0,
        default: 0
    },
    commentsCount: {
        type: Number,
        min: 0,
        default: 0
    }
},{timestamps: true}

)

export const Quote = mongoose.model("Quote", quoteSchema)