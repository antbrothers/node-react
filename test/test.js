const Burger = require('../server/models/burger')

Burger.findAll({
    where:{
        id:6
    }
})
.then(v=>{
    console.info(v)
})

// Burger.create({
//     burger_name: 111,
//     devoured:1
// })