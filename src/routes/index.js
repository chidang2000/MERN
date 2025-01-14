import SiteRouter from './site.route.js';
import AuthRouter from './auth.route.js';
import ProductRouter from './product.route.js';
import TypeProductRouter from './type.route.js';
import SearchReducer from './search.route.js';
const route = (app) => {
    app.use('/search', SearchReducer);
    app.use('/type', TypeProductRouter);
    app.use('/product', ProductRouter);
    app.use('/auth', AuthRouter);
    app.use('/', SiteRouter);
};

export default route;
