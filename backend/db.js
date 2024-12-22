import mongoose from "mongoose"

const connectDb= async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/mydatabase", {
            useNewUrlParser: true,
            useUnifiedTopology: true,})
        console.log('db is connected')
    }
    catch(e){
        console.error(e.message)
    }

}

export default connectDb