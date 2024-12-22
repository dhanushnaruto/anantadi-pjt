import express from 'express'
import connectDb from './db.js'
import cors from 'cors'
import Video from './model.js'

const app = express()

app.use(express.json())

app.use(cors({ origin: 'http://localhost:5173'}))


connectDb()


app.get('/', async(req, res)=>{
    const data = await Video.find()
    res.json(data)
})

app.post('/', async(req, res)=>{

    const {link, keywords} = req.body
    const newVideo = new Video({ link, keywords });

    try {
        const video = await newVideo.save();
        console.log('Video saved successfully:', video);
        res.status(200).json(video);
    } catch (e) {
        console.error('Error saving video:', e.message);
        res.status(400).json({ error: e.message });
    }

    
})

app.listen(3004, ()=>console.log('server is running at 3004'))