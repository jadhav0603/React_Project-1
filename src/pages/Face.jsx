import React from 'react';
import {useState,useEffect} from "react"
import PagesPanel from "../components/PagesPanel"
import CardData from "../components/CardData"
import "../components/CardData.css"
import fetchData from '../components/FetchCardData';
import face from '../images/pagesUnder/face.jpg'

function Face(){

  const [FaceData, setFaceData] = useState([])
  const [loading, setLoading] = useState(true);
  
useEffect(()=>{
  const getFaceData = async ()=>{
    setLoading(true)
    let value = "Blush&product_category=powder"
    const data = await fetchData(value)
    console.log(data)
    setLoading(false)
    setFaceData(data)
  }

   getFaceData() 
},[])

return (
  <div>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img src={face} style={{height:"20vw"}} />
    </div>
    <div style={{
      backgroundColor:"white",
      width:"100%",
      height:"50px",
      padding:"13px"
    }}> 
    
    <div>
      Home  &gt; <b> Face </b> 
    </div>
  </div>
    
    <div className="mainContainer">
      <div id="sidePanel">
        <PagesPanel />
      </div>

      <div>
      {(loading) ?
          <div style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Loading... </div> : 
         <CardData response={FaceData} />}
      </div>
    </div>
  
  </div>
);
}

export default Face;