import mongoose from "mongoose";

export const connectDB = async () => {
    // CLOUD DATABASE
    // await mongoose.connect('mongodb+srv://galibachowdhury56:CYH0fwVQw4QdbZ8h@ecommerce.mh2vj.mongodb.net/glamelane').then(()=>console.log("DB Connected"));

    //LOCAL DATABASE
    await mongoose.connect('mongodb://127.0.0.1:27017/glamelane', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>console.log("DB Connected"));
   
}