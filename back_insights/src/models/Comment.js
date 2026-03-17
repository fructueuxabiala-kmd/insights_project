import mongoose, { SchemaType, SchemaTypes } from "mongoose";

const {Schema} = mongoose

const commentSchema  = new Schema(
    {
         texte: {
            type: String,
            required: true,
            trim: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        quote: {
            type: Schema.Types.ObjectId,
            ref: "Quote",
            required: true
        }
    }, {timestamps: true}
)

export const Comment = mongoose.model("Comment",commentSchema)