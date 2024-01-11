import mongoose from "mongoose";

const userShema = mongoose.Schema({
    name:String,
    age:Number
})

const userModel=mongoose.model("User",userShema);
export default userModel;