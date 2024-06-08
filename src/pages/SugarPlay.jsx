import React from 'react';
import {useState,useEffect} from "react"
import PagesPanel from "../components/PagesPanel"
import CardData from "../components/CardData"
import "../components/CardData.css"
import fetchData from '../components/FetchCardData';
import sugarPlay from '../images/pagesUnder/sugarPlay.jpg'

function SugarPlay() {

  const [sugarPlayData, setSugarPlayData] = useState([])
  const [loading, setLoading] = useState(true);
  
useEffect(()=>{
  const getSugarplayData = async ()=>{
    setLoading(true)
    let value = "Blush&product_category=cream"
    const data = await fetchData(value)
    console.log(data)
    setLoading(false)
    setSugarPlayData(data)
  }

   getSugarplayData() 
},[])

return (
  <div>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img src={sugarPlay} style={{height:"20vw"}} />
    </div>
    <div style={{
      backgroundColor:"white",
      width:"100%",
      height:"50px",
      padding:"13px"
    }}> 
    
    <div>
      Home  &gt; <b> SugarPlay </b> 
    </div>
  </div>
    
    <div className="mainContainer">
      <div id="sidePanel">
        <PagesPanel />
      </div>

      <div>
      {(loading) ?
          <div style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Loading... </div> : 
         <CardData response={sugarPlayData} />}
      </div>
    </div>
  
  </div>
);
}

export default SugarPlay;