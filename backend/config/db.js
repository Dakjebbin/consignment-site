import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Dakjebbin:Dakjebbin505@cluster0.vqb04.mongodb.net/consignment').then(()=>console.log("mongoDB connected"))
    .catch((err)=>console.log(err));
}