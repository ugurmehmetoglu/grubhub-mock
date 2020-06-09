import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card.jsx'
import Cuisine from './Cuisine.jsx'
import '../../styles/style.css'



function App() {

    const [imgURL, setImgURL] = useState('')
    const [name, setName] = useState('')
    const [deliveryTime, setDeliveryTime] = useState('')
    const [rating, setRating] = useState(0)

    const [foods, setFoods] = useState([])

    const [cuisineImgURL, setCuisineImgURL] = useState('')
    const [cuisineName, setCuisineName] = useState('')
    const [cuisines, setCuisines] = useState([])




    const [searchItem, setSearchItem] = useState('')

    function handleCuisineImg(e) {
        setCuisineImgURL(e.target.value)
    }

    function handleCuisineName(e) {
        setCuisineName(e.target.value)
    }


    function handleSearchItem(e) {
        setSearchItem(e.target.value)
    }

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

    function fetchCuisineData() {
        axios
            .get('/cuisines')
            .then(res => {

                setCuisines(res.data)
            })
            .catch(err => console.log(err))
    }

    function addCuisine() {
        axios
            .post('/cuisines', { cuisineImgURL: cuisineImgURL, cuisineName: cuisineName })
            .then(res => fetchCuisineData())
            .catch(err => res.send(err))
    }

    function fetchData() {
        axios
            .get('/foods')
            .then(res => {

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

    function handleSearch(searchFood) {

        axios
            .get('/search', { params: { name: searchFood } })
            .then((result) => {

                setFoods(result.data)

            })
            .catch(err => console.log(err))
        event.preventDefault()

    }


    useEffect(() => {
        fetchData();
        fetchCuisineData();

    }, [])






    return (
        <div>
            <div className="top-container" >
                <h1 className="logo">GRUBHUB</h1>

                <div className="search-bar-container">
                    <form onSubmit={() => handleSearch(searchItem)}>
                        <input onChange={handleSearchItem} className="search-bar" type="text" placeholder="Search.." />
                    </form>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="25px" height="25px">    <path d="M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z" /></svg>
                </div>





            </div>
            <div className="main-container">
                <div className="main-container-left">

                </div>
                <div className="main-container-right">

                    <div>
                        <input onChange={handleCuisineImg} type="text" placeholder="CuisineImg" />
                        <input onChange={handleCuisineName} type="text" placeholder="CuisineName" />
                        <button onClick={addCuisine} >Add Cuisine</button>
                        <div>
                            <div className="cuisine-wrapper">
                                <div>Most Popular Near You</div>
                                <div>All Cuisines</div>
                            </div>
                            <div className="cuisines">
                            {cuisines.map((cuisine, i) => <Cuisine key={i} cuisineImgURL={cuisine.cuisineImgURL} cuisineName={cuisine.cuisineName} />)}
                            </div>

                        </div>


                    </div>
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