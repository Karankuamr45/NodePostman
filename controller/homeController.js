import userModel from "../models/userSchema.js";

const homeController=(req,res)=>{
    res.send("Hello from ch ayshb2 withmv model")
}


const addUserController=async(req,res)=>{
    try {
        const {name,age}=req.body;

        const newUser=userModel({
            name:name,
            age:age,
        })

        await  newUser.save()
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const deleteUserController=async(req,res)=>{
    const userId=req.params.id
    try {

        const deleteUser=await userModel.findByIdAndDelete(userId);

        if(!deleteUser){
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.status(200).json({ message: 'User deleted successfully', deleteUser });
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
}

const getUserController=async(req,res)=>{
    try {
        const users=await userModel.find();
        res.status(201).json({message:"Data is here",data:users})
        // console.log(users)
        
    } catch (error) {
        console.log(error.message)
        
    }
}

export {homeController,addUserController,deleteUserController,getUserController}