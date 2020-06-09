import React from 'react'


function Cuisine(props) {


    return (
     
           
            <div className="item" >
                <div ><img className="cuisine-img" src={props.cuisineImgURL} /></div>
                <div className="img-text" >{props.cuisineName}</div>
            </div>


    )
}


export default Cuisine;