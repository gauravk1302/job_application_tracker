import { string } from "better-auth";
import mongoose, { Schema, Document, Mongoose } from "mongoose";

export interface IBoard extends Document {
    // In this document we define the fields that we want to include in our document 
    name: string,
    userId: string,
    columns: mongoose.Types.ObjectId[],
    createdAt: Date,
    updatedAt: Date,
}

const BaordSchema = new Schema<IBoard>({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        index: true,
    },
    columns: [
        {
            type: Schema.Types.ObjectId,
            ref: "Column",
        },
    ],
},
    {
        timestamps: true,// It will automatically add the fields like createdAt and updatedAt in each of the above field
    }
)

export default mongoose.models.Board || mongoose.model<IBoard>("Board", BaordSchema);