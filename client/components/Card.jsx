import React from 'react'
import '../../styles/style.css'

function Card(props) {

    return (
        <div className="card-template">
            <div>
                <div className="img"><img src={props.imgURL} /></div>
                <div>
                    <div className="text-name">{props.name}</div>
                    <div><img src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577660727/subscriptions/flag_oyyevx.svg" /></div>
                    <div className="text-deliveryTime">{props.deliveryTime}</div>
                    <div className="rating">{props.rating}</div>
                </div>
            </div>

        </div>
    )
}


export default Card;