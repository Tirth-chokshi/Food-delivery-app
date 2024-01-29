import mongoose from 'mongoose'


const URI = ''
export const mongoDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Success");

    } catch (error) {
        console.error("Connection Error:", error);  
    }
};
