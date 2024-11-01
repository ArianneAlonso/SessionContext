import mongoose from "mongoose";

export const dbMDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/sessioncontext", {});
        console.log("based de datos conectada");
    } catch (error) {
        console.log(error);
    }
};

//app