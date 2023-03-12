const express = require('express');
const app = express();
const CONFIG = require('./config.json');
const CategoriesRouter = require('./routes/categories');
const ProductsRouter = require('./routes/products');
const Path = require('path');

const cors = require('cors')
app.use(cors())

app.set('view engine', 'ejs');

app.use('/static', express.static(Path.join(__dirname, 'static')));

app.use(express.json());
app.use(express.urlencoded());

app.use('/categories', CategoriesRouter);
app.use('/products', ProductsRouter);

app.listen(CONFIG.PORT, () => {
    console.log(`Server is running at port ${CONFIG.PORT}`);
});