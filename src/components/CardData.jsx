import React from "react"
import "./CardData.css"
function CardData({ response }) {

    return (
        <>
            <div className="cardMain">
                {response.map((ele, i) => (
                    <div className="cards" key={i}>
                        <div className="cardElements" key={ele.i} >
                            <img src={ele.api_featured_image} />
                            <div className="fetchInfo">
                                <h6>{ele.name}</h6>
                                <p>{ele.product_colors.length} shades</p>
                                <h2>{ele.price} $ </h2>
                            </div>
                        </div>
                        <div className="btn" key={i} >
                            <button className="btn1"> <i className="fa-regular fa-heart"></i> </button>
                            <button className="btn2">SELECT SHADE</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardData