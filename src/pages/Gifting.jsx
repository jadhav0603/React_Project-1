import React from 'react';
import {useState,useEffect} from "react"
import PagesPanel from "../components/PagesPanel"
import CardData from "../components/CardData"
import "../components/CardData.css"
import fetchData from '../components/FetchCardData';

function Gifting() {

  const [GiftingData, setGiftingData] = useState([])
  const [loading, setLoading] = useState(true);
  
useEffect(()=>{
  const getGiftingData = async ()=>{
    setLoading(true)
    let value = "eyeshadow"
    const data = await fetchData(value)
    console.log(data)
    setLoading(false)
    setGiftingData(data)
  }

   getGiftingData() 
},[])

return (
  <div>

    <div style={{
      backgroundColor:"white",
      width:"100%",
      height:"50px",
      padding:"13px"
    }}> 
    
    <div>
      Home  &gt; <b> Gifting </b> 
    </div>
    </div>
    
    <div className="mainContainer">
      <div id="sidePanel">
        <PagesPanel />
      </div>

      <div>
      {(loading) ?
          <div style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Loading... </div> : 
         <CardData response={GiftingData} />}
      </div>
    </div>
  
  </div>
);
}

export default Gifting;
