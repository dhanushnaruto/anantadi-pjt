import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom'


function Home() {
    const [url, seturl] = useState('')
    const [keywords, setkeywords] = useState('')

    const navigate = useNavigate()
    
    const handlSubmit = async()=>{
        if(!url){
            alert('please enter an url')
            return 
        }
        if(url.includes('youtube.com') || url.includes('youtu.be')){
            const videoId = url.includes('v=')
            ?url.split('v=')[1].split('&')[0]
            :url.split('/').pop()
            
           try{
                const response = await axios.post('https://anantadi-pjt-1.onrender.com', {link:videoId, keywords:keywords})
                alert('data submited successfully')
                console.log('data submited successfully')
                navigate('/videos')
           }
           catch(e){
            alert(e.message)
           }
        }
    }

 const navigatevidoes = ()=>{
    navigate('/videos')
 }

  return (
    <div className='home-container'>
        <nav className='navbar'>
            <h1 >Sierra</h1>
            <button>Sign in</button>
        </nav>

        <div className='home-card'>
            <div>
                <h4 >#Repurpose video with AI</h4>
                <h1>Now Repupose Long Video, 10x Faster</h1>
                <p>Sierra allows you to create new video content in just a few clicks , saving your time and efforts.</p>

                <form>
                    <section>
                        <label htmlFor='link'>Video Link here</label>
                        <input id='link' className='link-input' type='terxt' placeholder='Paste your video link(YouTube)' onChange={(e)=>seturl(e.target.value)}/>
                    </section>

                    <section>
                        <label htmlFor='keywords'>Keywords</label>
                        <textarea rows={8} id="keywords"  onChange={(e)=>setkeywords(e.target.value)}></textarea>
                    </section>
                </form>
                <div>
                    <button className='call-button' onClick={handlSubmit}>Call to Action</button>
                    <button  className='call-button' onClick={navigatevidoes} style={{marginLeft:'10px'}}>Videos</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
