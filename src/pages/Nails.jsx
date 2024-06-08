import React from 'react';
import {useState,useEffect} from "react"
import PagesPanel from "../components/PagesPanel"
import CardData from "../components/CardData"
import "../components/CardData.css"
import fetchData from '../components/FetchCardData';
import nail from '../images/pagesUnder/nails.gif'

function Nails() {

  const [NailsData, setNailsData] = useState([])
  const [loading, setLoading] = useState(true);
  
useEffect(()=>{
  const getNailsData = async ()=>{
    setLoading(true)
    let value = "nail_polish"
    const data = await fetchData(value)
    console.log(data)
    setLoading(false)
    setNailsData(data)
  }

   getNailsData() 
},[])

return (
  <div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img src={nail} style={{height:"20vw"}}/>
    </div>

    <div style={{
      backgroundColor:"white",
      width:"100%",
      height:"50px",
      padding:"13px"
    }}> 
    
    <div>
      Home  &gt; <b> Nails </b> 
    </div>
    </div>
    
    <div className="mainContainer">
      <div id="sidePanel">
        <PagesPanel />
      </div>

      <div>
      {(loading) ?
          <div style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Loading... </div> : 
         <CardData response={NailsData} />}
      </div>
    </div>
  
  </div>
);
}

export default Nails;