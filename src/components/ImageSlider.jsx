import { useState, useEffect, useRef, createRef } from "react"
import "./ImageSlider.css"
import React from "react"

function ImageSlider() {
    const Links = [
        "src/images/slider/img1.webp",
        "src/images/slider/img2.webp",
        "src/images/slider/img3.webp",
        "src/images/slider/img4.webp",
        "src/images/slider/img5.gif",
    ]

    const [index, setIndex] = useState(0);
    
    const divRef = useRef([React.createRef(),
                            React.createRef(),
                            React.createRef(),
                            React.createRef()])
   

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % Links.length)
            divRef.style.size="20px";
        }, 2500)

        return () => clearInterval(interval)

    }, [Links.length])

    useEffect(()=>{
        divRef.current.forEach((ele , i)=>{
            if(ele.current){
                ele.current.style.width = "10px"
                ele.current.style.backgroundColor="grey"
            }
        })

        const divIndex = index % divRef.current.length 
        if(divRef.current[divIndex].current)
            {
                divRef.current[divIndex].current.style.width="30px"
                divRef.current[divIndex].current.style.borderRadius="10px"
                divRef.current[divIndex].current.style.backgroundColor="black"
            }
    })



    const handlePrevious = ()=>{
        setIndex((prev) => (prev - 1 + Links.length) % Links.length);
    }

    const handleNext = ()=>{
        setIndex((prev) => (prev + 1) % Links.length);
    }


    return (
        <>
        <div id="sliderImages">
            <button type="button" onClick={handlePrevious}>
                <i className="fa-solid fa-less-than"></i>
            </button>
            <img src={Links[index]} />
            <button type="button" onClick={handleNext}>
                <i className="fa-solid fa-greater-than"></i>
            </button>
        </ div>
            <div id="sliderDiv">
                <div ref={divRef.current[0]} id="div1"></div>
                <div ref={divRef.current[1]} id="div2"></div>
                <div ref={divRef.current[2]} id="div3"></div>
                <div ref={divRef.current[3]} id="div4"></div>
            </div>
        </>
    )
}

export default ImageSlider

