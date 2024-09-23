import mongoose from "mongoose";
const connectDB = async()=>{
    const connect = await mongoose.connect('mongodb+srv://mongoDB:mongoDB@sakshi.3gbsl.mongodb.net/?retryWrites=true&w=majority&appName=SAkshi');
    if(connect){
        console.log('connection successfull...')
    }else{
        console.log('connection failed...')
    }
}


export default connectDB;


