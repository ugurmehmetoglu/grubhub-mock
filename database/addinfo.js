const Item = require('./index.js').Item

const ratings = [3.1, 3.2 ,3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0]
const restaurants = ["Fred-62", "Haagen Dazs", "Howards Cafe", "Organico", "Bodhi Bowl", "Pressed Juicery", "Happy Taco", "Wiches on Wilshire", "Sunset Grill", "Chibo", "Falafel Corner", "Pizza King" ]
const deliveryTimes = ["30-40", "25-35", "35-45", "45-60"]
const cuisines = ["American", "Salads", "Kebab", "Chicken", "Bakery", "Mexican", "Lunch Specials", "Pasta", "Wraps", "Tacos"]
const images = ["https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/iepnqith6l7r74pz8v9v", "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/o6wf56fizarimiyxypmb","https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/qkzxixqsjxcb5ignedir", "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/iafmml3ovfotesgmbmxu","https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/txedryk4qhb4owx6a2hm","https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/bblegixsal1an4jnerup","https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/yxs2ed0y1ax3hid3vjzm","https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/s6iyjq2ng1ynmiv1gczd","https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/hjgixtzulfksf2uffykb","https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/cpucjrmrlsbwasdkpy5u","https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/km7thgkwpab0raup7v6p"]

var addedInfo=[];
function createData(){
    var randomRating = Math.floor(Math.random() * Math.floor(ratings.length))
    var randomRestaurant = Math.floor(Math.random() * Math.floor(restaurants.length))
    var randomDeliveryTime = Math.floor(Math.random() * Math.floor(deliveryTimes.length))
    var randomImage = Math.floor(Math.random() * Math.floor(images.length))
    var randomCuisine = Math.floor(Math.random() * Math.floor(cuisines.length))
    var innerObject = {rating: ratings[randomRating], restaurant: restaurants[randomRestaurant], deliveryTime: deliveryTimes[randomDeliveryTime], image: images[randomImage], cuisine: cuisines[randomCuisine]}
    
    addedInfo.push(innerObject);
}

 for(var i = 0; i < 50; i++){
     createData()
 }
 

 Item.bulkCreate(addedInfo)
 .then(result => console.log("data rows inserted"))
 .catch(err => console.log(err)) 

 console.log(addedInfo)

module.exports={
    addedInfo
}
