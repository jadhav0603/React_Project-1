import React from 'react';
import {useState,useEffect} from "react"
import PagesPanel from "../components/PagesPanel"
import CardData from "../components/CardData"
import "../components/CardData.css"
import fetchData from '../components/FetchCardData';
import Lip from '../images/pagesUnder/lips.jpg'

function Lips() {

  const [LipsData, setLipsData] = useState([])
  const [loading, setLoading] = useState(true);
  
useEffect(()=>{
  const getLipsData = async ()=>{
    setLoading(true)
    let value = "lipstick"
    const data = await fetchData(value)
    console.log(data)
    setLoading(false)
    setLipsData(data)
  }

   getLipsData() 
},[])

return (
  <div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img src={Lip} style={{height:"20vw"}}/>
    </div>

    <div style={{
      backgroundColor:"white",
      width:"100%",
      height:"50px",
      padding:"13px"
    }}> 
    
    <div>
      Home  &gt; <b> Lips </b> 
    </div>
    </div>
    
    <div className="mainContainer">
      <div id="sidePanel">
        <PagesPanel />
      </div>

      <div>
      {(loading) ?
          <div style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Loading... </div> : 
         <CardData response={LipsData} />}
      </div>
    </div>
  
  </div>
);
}

export default Lips;