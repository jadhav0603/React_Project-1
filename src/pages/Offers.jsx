import React from 'react';
import {useState,useEffect} from "react"
import PagesPanel from "../components/PagesPanel"
import CardData from "../components/CardData"
import "../components/CardData.css"
import fetchData from '../components/FetchCardData';

function Offers() {

  const [OffersData, setOffersData] = useState([])
  const [loading, setLoading] = useState(true);
  
useEffect(()=>{
  const getOffersData = async ()=>{
    setLoading(true)
    let value = "&price_greater_than=1&price_less_than=5"
    const data = await fetchData(value)
    console.log(data)
    setLoading(false)
    setOffersData(data)
  }

   getOffersData() 
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
      Home  &gt; <b> Offers </b> 
    </div>
  </div>
    
    <div className="mainContainer">
      <div id="sidePanel">
        <PagesPanel />
      </div>

      <div>
      {(loading) ?
          <div style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Loading... </div> : 
         <CardData response={OffersData} />}
      </div>
    </div>
  
  </div>
);
}

export default Offers;
