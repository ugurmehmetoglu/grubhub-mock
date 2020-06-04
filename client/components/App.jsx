import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card.jsx'
import '../../styles/style.css'


function App() {

    const [imgURL, setImgURL] = useState('')
    const [name, setName] = useState('')
    const [deliveryTime, setDeliveryTime] = useState('')
    const [rating, setRating] = useState(0)

    const [foods, setFoods] = useState([])

    function handleImgURL(e) {
        // console.log(e.target.value)
        setImgURL(e.target.value)
    }

    function handleName(e) {
        setName(e.target.value)
    }

    function handleDeliveryTime(e) {
        setDeliveryTime(e.target.value)
    }

    function handleRating(e) {
        setRating(e.target.value)
    }

    function fetchData() {
        axios
            .get('/foods')
            .then(res => {
                console.log(res.data)
                setFoods(res.data)
            })
            .catch(err => res.send(err))

    }

    function addFood() {
        axios
            .post('/foods', { imgURL: imgURL, name: name, deliveryTime: deliveryTime, rating: rating })
            .then(res => fetchData())
            .catch(err => res.send(err))
    }


    useEffect(() => {
        fetchData();
    }, [])




    return (
        <div>
            <div className="top-container" >
                <h1 className="logo">GRUBHUB</h1>
                <input className="search-bar" type="text" placeholder="Search.." />
            


            </div>
            <div className="main-container">
                <div className="main-container-left">

                </div>
                <div className="main-container-right">
                    <div className="top-right">

                        <h1 className="h1">Offers Near You</h1>
                        <input className="input" onChange={handleImgURL} type="text" placeholder="imgURL" />
                        <input className="input" onChange={handleName} type="text" placeholder="name" />
                        <input className="input" onChange={handleDeliveryTime} type="text" placeholder="delivery-time" />
                        <input className="input" onChange={handleRating} type="number" placeholder="rating" />
                        <button className="add-button" onClick={addFood}>Add Food</button>

                    </div>
                    <div className="container">
                        {foods.map((food, i) => <Card key={i} imgURL={food.imgURL} name={food.name} deliveryTime={food.deliveryTime} rating={food.rating} />)}
                    </div>

                </div>


            </div>
        </div>



    )
}


export default App;