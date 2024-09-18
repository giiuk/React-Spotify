import mongoose from "mongoose";

export default async function conectDb(){
    mongoose.connect("mongodb+srv://giiuk:gigi@cluster0.e0tsy.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}