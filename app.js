const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const publicPath = path.resolve(__dirname, './public');

// Middlewares
app.use(express.static(publicPath));
app.use(methodOverride ('_method'));

app.use('/', require('./routes/principal.js'))
app.use('/products', require('./routes/products.js'));
app.use('/lista', require('./routes/lista.js'));
app.use('/auth', require('./routes/auth.js'));

app.set('view engine','ejs');

app.listen(process.env.PORT || 3030, () => console.log('Servidor Corriendo')); 




