import DetailProduct from '../pages/Product/DetailProduct';
import Admin from '../layout/AdminLayout';
import home from '../pages/home/Home';
import UpdateProduct from '../pages/admin/product/UpdateProduct';
import Product from '../pages/admin/product/Product';
import CreateProduct from '../pages/admin/product/CreateProduct';
import ListProductDeleted from '../pages/admin/product/ListProductDeleted';
import TypeProduct from '../pages/admin/typeProduct/TypeProduct';
import CreateTypeProduct from '../pages/admin/typeProduct/CreateTypeProduct';
import UpdateTypeProduct from '../pages/admin/typeProduct/UpdateTypeProduct';
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

    {
        path: '/admin/product/deleted',
        component: ListProductDeleted,
        layout: Admin,
    },

    {
        path: '/admin/type',
        component: TypeProduct,
        layout: Admin,
    },
    {
        path: '/admin/type/create',
        component: CreateTypeProduct,
        layout: Admin,
    },
    {
        path: '/admin/type/:id',
        component: UpdateTypeProduct,
        layout: Admin,
    },
];

export default routes;
