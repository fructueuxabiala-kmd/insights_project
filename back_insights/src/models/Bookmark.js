import mongoose from "mongoose";

const {Schema} = mongoose

const BookmarkSchema  = new Schema(
    {
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

export const Bookmark = mongoose.model("Bookmark",BookmarkSchema)