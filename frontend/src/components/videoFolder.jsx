import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import '../App.css'
import axios from 'axios';
import VideoItems from './vidoeItems';
import { useNavigate } from 'react-router-dom';

function VideoFolder() {
  const [videoData, setData] = useState([])
  const [search, setSearch] = useState('')

  const filteredData = videoData.filter(each=>each.keywords.toLowerCase().includes(search))
  console.log(filteredData)
  const navigate = useNavigate()


  useEffect(()=>{
    const getData = async()=>{
      try{
        const response = await axios.get('https://anantadi-pjt-1.onrender.com/')
        setData(response.data)
      }catch(e){
        console.log(e.message)
      }
      
    }
    getData()
  },[])

  const notFound = () =>{
    return(
      <div className='d-flex flex-row justify-content-center'>
        <img src='https://cdn.dribbble.com/users/406903/screenshots/6723682/drawkit-grape-pack-illustration-3-dribbble-export-v0.1.gif' className='not-found-img'/>
      </div>
    )
  }

  return (
    <div className='videos-container'>
        <div className='searchbar'>
          <FaSearch className='searchicon'/>
          <input type='search' placeholder='Search your Video here!...' onChange={e=> setSearch(e.target.value)}/>
        </div>

        <div className='container'>
          <div className='row'>
            {filteredData.length === 0?notFound():filteredData.map(each=> <VideoItems key = {each.id} items = {each}/>)}
          </div>
        </div>

        <button className='back-button' onClick={()=>navigate('/')}>Back to Home</button>
    </div>
  )
}

export default VideoFolder
