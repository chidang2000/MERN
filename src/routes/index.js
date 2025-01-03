import DetailProduct from '../pages/Product/DetailProduct';
import Admin from '../pages/admin/AdminLayout';
import home from '../pages/home/Home';
import UpdateProduct from '../pages/admin/product/UpdateProduct';
import Product from '../pages/admin/product/Product';
import CreateProduct from '../pages/admin/product/CreateProduct';
const routes = [
    {
        path: '/',
        component: home,
    },
    {
        path: '/:id',
        component: DetailProduct,
    },
    {
        path: '/admin',
        component: Product,
        layout: Admin,
    },
    {
        path: '/admin/product/create',
        component: CreateProduct,
        layout: Admin,
    },
    {
        path: '/admin/product/:id',
        component: UpdateProduct,
        layout: Admin,
    },
];

export default routes;
