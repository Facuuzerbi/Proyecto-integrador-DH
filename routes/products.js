let express = require('express');
let router = express.Router();
const productsController = require('../controllers/products')
const dataproducts = require('../data/products.json'); // a corregir


// Middlewares

router.use('/autos', (productsController.autos));
router.use('/motos', (productsController.motos));
router.use('/monopatines', (productsController.monopatines));
router.use('/detail/:id?', (productsController.detail));
router.use('/edit/:id?', (productsController.edit));

// Routes
// Formulario de Producto
router.get('/create',(productsController.create));
router.post('/create', (productsController.store));


module.exports = router;