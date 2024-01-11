import mongoose from 'mongoose';

const connectdb=async(DATABASE_URL)=>{
    try {
        const DATABASE_NAME={
            dbName:"FoodPanda,"
        }
       await mongoose.connect(DATABASE_URL,DATABASE_NAME)
       console.log("Database connected of FoodPanda");
    } catch (error) {
        console.log(error.message)
    }

}

export default connectdb;