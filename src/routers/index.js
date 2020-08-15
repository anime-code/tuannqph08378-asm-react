import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LayoutAdmin from "../pages/layouts/LayoutAdmin";
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
//Product
import ProductsManager from '../pages/views/Admin/Product'
import ProductCreate from "../pages/views/Admin/Product/create"
import ProductEdit from "../pages/views/Admin/Product/edit"
//Category
import CategoriesManager from "../pages/views/Admin/Category/index"
import CategoriesCreate from "../pages/views/Admin/Category/create"
import CategoriesEdit from "../pages/views/Admin/Category/edit"
import ProductByCate from "../components/Admin/ProductByCate";
//CategoriesBlog
import CategoriesBlogManager from "../pages/views/Admin/Category_Blog/index"
import CategoriesBlogEdit from "../pages/views/Admin/Category_Blog/edit"
import CategoriesBlogCreate from "../pages/views/Admin/Category_Blog/create"
//Blogs
import BlogsManager from "../pages/views/Admin/Blog/index"
import BlogsEdit from "../pages/views/Admin/Blog/edit"
import BlogsCreate from "../pages/views/Admin/Blog/create"
//Order
import Order from "../pages/views/Admin/Order/index"
//Main
import LayoutMain from "../pages/layouts/LayoutMain";
import Home from "../pages/views/Main/Home/index"
import ProductDetail from "../pages/views/Main/ProductDetail/index"
import Shop from "../pages/views/Main/Shop/index"
import ProductCate from "../components/Main/ProductByCate"
import ShowCart from "../components/Main/ShowCart"

const Index = ({

                   onCart,
                   products,
                   categories_blogs,
                   onCreateCategoriesBlog,
                   onRemoveCategoriesBlog,
                   onUpdateCategoriesBlog,
                   blogs, onCreateBlog, onUpdateBlog,
                   onRemoveBlog,
                   categories,
                   onCreateCategory,
                   onCreateProduct,
                   onUpdateProduct,
                   onRemoveProduct,
                   onRemoveCategory,
                   onUpdateCategory,
                   sliders,
                   orders,
                   order_detail,
               }) => {

    return (
        <Router>
            <Switch>

                <Route path="/admin/:path?">
                    <LayoutAdmin>
                        <Route path='/admin' exact>
                            <Dashboard orders={orders} order_detail={order_detail} categories={categories}
                                       categories_blog={categories_blogs} products={products}
                                       blogs={blogs}></Dashboard>
                        </Route>
                        {/*Category*/}
                        <Route path='/admin/categories' exact>
                            <CategoriesManager onRemove={onRemoveCategory} categories={categories}/>
                        </Route>
                        <Route path="/admin/categories/create" exact>
                            <CategoriesCreate onCreate={onCreateCategory}/>
                        </Route>
                        <Route path="/admin/categories/:id/products" exact>
                            <ProductByCate products={products} categories={categories}/>
                        </Route>
                        <Route path="/admin/categories/edit/:id" exact>
                            <CategoriesEdit categories={categories} onUpdate={onUpdateCategory}/>
                        </Route>
                        {/*Product*/}
                        <Route path='/admin/products' exact>
                            <ProductsManager products={products} categories={categories}
                                             onRemove={onRemoveProduct}></ProductsManager>
                        </Route>
                        <Route path="/admin/products/create" exact>
                            <ProductCreate categories={categories} onCreate={onCreateProduct}/>
                        </Route>
                        <Route path="/admin/products/edit/:id" exact>
                            <ProductEdit products={products} onUpdate={onUpdateProduct} categories={categories}/>
                        </Route>
                        {/*CategoriesBlog*/}
                        <Route path='/admin/categories_blog' exact>
                            <CategoriesBlogManager onRemove={onRemoveCategoriesBlog}
                                                   categories_blog={categories_blogs}/>
                        </Route>
                        <Route path="/admin/categories_blog/create" exact>
                            <CategoriesBlogCreate onCreate={onCreateCategoriesBlog}/>
                        </Route>
                        <Route path="/admin/categories_blog/edit/:id" exact>
                            <CategoriesBlogEdit categories={categories_blogs} onUpdate={onUpdateCategoriesBlog}/>
                        </Route>
                        {/*Blogs*/}
                        <Route path='/admin/blogs' exact>
                            <BlogsManager categories={categories_blogs} blogs={blogs} onRemove={onRemoveBlog}
                                          blogs={blogs}/>
                        </Route>
                        <Route path="/admin/blogs/create" exact>
                            <BlogsCreate categories={categories_blogs} onCreate={onCreateBlog}/>
                        </Route>
                        <Route path="/admin/blogs/edit/:id" exact>
                            <BlogsEdit categories={categories_blogs} blogs={blogs} onUpdate={onUpdateBlog}/>
                        </Route>

                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain categories={categories}>
                        <Switch>
                            <Route path="/cart">
                                <ShowCart></ShowCart>
                            </Route>
                            <Route path="/" exact>
                                <Home onCart={onCart} products={products} blogs={blogs} sliders={sliders}/>
                            </Route>
                            <Route path="/products" exact>
                                {/*<Home products={products} sliders={sliders}/>*/}
                            </Route>
                            <Route path="/products/:id" exact>
                                <ProductDetail onCart={onCart} products={products}/>
                            </Route>
                            <Route path="/:slug/:id" exact>
                                <ProductCate onCart={onCart} categories={categories} products={products}/>
                            </Route>
                            <Route path="/shop" exact>
                                <Shop onCart={onCart} categories={categories} products={products}/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
        ;
};

export default Index;
