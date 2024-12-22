import { Schema, model } from "mongoose";

const videoSchema = new Schema({
    link:{
        type:String,
        required:true
    },
    keywords:{
        type:String,
        required:true
    }

})

const Video = model('video', videoSchema)

export default Video 