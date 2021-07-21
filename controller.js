const houses = require('./db.json')
let houseId = 4

module.exports = {
    getAllHouses: function (req, res){
        res.status(200).send(houses)
    },
    createHouse: function (req, res){
        let {address, price, imageURL} = req.body
        let newHouse = {
            id: houseId,
            address,
            price,
            imageURL

        }

        houses.push(newHouse)
        res.status(200).send(houses)
        housesId++
    },
    updateHouse: function (req, res) {
        const {id} =  req.params;
        const {type} = req.body

        const index = houses.findIndex(housesObj => 
            housesObj.id === +id)

        if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type ==='minus'){
            houses[index].price -=10000
            res.status(200).send(houses)
        } else {
            res.status(400).send('Error')
        }
        
    },

    deleteHouse: function (req, res) {

        // const {id } = req.params
        const index = houses.findIndex(function(housesObj){
            return housesObj.id === +req.params.id;
        })
        houses.splice(index, 1) 

        res.status(200).send(houses)
    },
}

// updateMovie: function (req, res){
//     const id = +req.params.id;
//     const {type} = req.body;

//     // console.log(id, typeof id, type)

//     const tgtIndex = movies.findIndex(function(movieObj){
//         return movieObj.id === id;
//     });


//     if(type === 'plus'){
//             movies[tgtIndex].rating++
//             res.status(200).send(movies) //sending a whole list of movies 
//     }else if (type === 'minus'){
//             movies[tgtIndex].rating--
//             res.status(200).send(movies)
//     }else{
//         res.status(400).send('Values should be plus or minus')
//     }
// }