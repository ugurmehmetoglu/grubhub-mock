import React from 'react';


function Item(props){
console.log(props);
    return(
        <div className="item-container">
        <div className="item-left">
         
         <div className="item-left-image">
           <img src={props.item.image} />
         </div>  
        
         <div className="item-left-info">
             
             <h5>{props.item.restaurant}</h5>
             
             <div className="item-left-info-bottom">
               <img src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577660727/subscriptions/flag_oyyevx.svg"/>
               <span>{props.item.cuisine}</span>
             </div>
           
         </div>
          
              
       </div>
         
       <div className="item-right">
         <div className="item-right-body">
           <div className="item-right-rating">
             <h5>{props.item.rating}</h5>
             <span>Ratings</span>
           </div>
           <div className="item-right-deliveryTime">
             <h5>{props.item.deliveryTime}</h5>
             <span>mins</span>
           </div>
         </div>
       
         
       </div>
        
       </div>
    )

}

export default Item;