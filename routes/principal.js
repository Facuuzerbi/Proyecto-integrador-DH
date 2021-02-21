let express = require('express');
let router = express.Router();


router.get('/', (req,res) => {
    res.render('../views/home.ejs'); 
});

router.get('/cart', (req,res) => {
    res.render('../views/cart.ejs');
});

router.get('/crear', (req,res) => {
    res.render('../views/product/create.ejs');
});

module.exports = router;