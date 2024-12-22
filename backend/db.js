import mongoose from "mongoose"

const connectDb= async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('db is connected')
    }
    catch(e){
        console.error(e.message)
    }

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err.message);
    });
}

export default connectDb