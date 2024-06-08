import React from 'react';
import {useState,useEffect} from "react"
import PagesPanel from "../components/PagesPanel"
import CardData from "../components/CardData"
import "../components/CardData.css"
import fetchData from '../components/FetchCardData';

function Skincare() {

  const [SkincareData, setSkincareData] = useState([])
  const [loading, setLoading] = useState(true);
  
useEffect(()=>{
  const getSkincareData = async ()=>{
    setLoading(true)
    let value = "foundation&product_category=liquid"
    const data = await fetchData(value)
    console.log(data)
    setLoading(false)
    setSkincareData(data)
  }

   getSkincareData() 
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
      Home  &gt; <b> Skincare </b> 
    </div>
    </div>
    
    <div className="mainContainer">
      <div id="sidePanel">
        <PagesPanel />
      </div>

      <div>
      {(loading) ?
          <div style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Loading... </div> : 
         <CardData response={SkincareData} />}
      </div>
    </div>
  
  </div>
);
}

export default Skincare;

