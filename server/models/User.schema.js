import mongoose from "mongoose";

const SchemaNew = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", SchemaNew);

//controllers,
