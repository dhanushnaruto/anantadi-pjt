import mongoose from "mongoose"

const connectDb= async() => {
    try{
        await mongoose.connect(process.env.CONNECTION_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true,})
        console.log('db is connected')
    }
    catch(e){
        console.error(e.message)
    }

}

export default connectDb