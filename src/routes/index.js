import SiteRouter from './site.route.js';
import AuthRouter from './auth.route.js';
import ProductRouter from './product.route.js';

const route = (app) => {
    app.use('/product', ProductRouter);
    app.use('/auth', AuthRouter);
    app.use('/', SiteRouter);
};

export default route;
