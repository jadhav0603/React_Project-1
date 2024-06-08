import React from 'react';
import {useState,useEffect} from "react"
import PagesPanel from "../components/PagesPanel"
import CardData from "../components/CardData"
import "../components/CardData.css"
import fetchData from '../components/FetchCardData';
import newLaunches from '../images/pagesUnder/newLaunches.gif'

function NewLaunches() {

  const [NewLaunchesData, setNewLaunchesData] = useState([])
  const [loading, setLoading] = useState(true);
  
useEffect(()=>{
  const getNewLaunchesData = async ()=>{
    setLoading(true)
    let value = "&brand=almay"
    const data = await fetchData(value)
    console.log(data)
    setLoading(false)
    setNewLaunchesData(data)
  }

   getNewLaunchesData() 
},[])

return (
  <div>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img src={newLaunches} style={{height:"20vw"}} />
    </div>
    <div style={{
      backgroundColor:"white",
      width:"100%",
      height:"50px",
      padding:"13px"
    }}> 
    
    <div>
      Home  &gt; <b> NewLaunches </b> 
    </div>
  </div>
    
    <div className="mainContainer">
      <div id="sidePanel">
        <PagesPanel />
      </div>

      <div>
      {(loading) ?
          <div style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Loading... </div> : 
         <CardData response={NewLaunchesData} />}
      </div>
    </div>
  
  </div>
);
}

export default NewLaunches;