import React, {useEffect, useState} from 'react';
import Routers from "./routers/index";
import apiRequest from "./Api/index";

const App = () => {
    const localStrCart = JSON.parse(localStorage.getItem('cart'));
    const [carts, setCart] = useState(localStrCart);
    const [products, setProducts] = useState([]);
    const [sliders, setSlider] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoriesBlog, setCategoriesBlog] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [orders, setOrders] = useState([]);
    const [orderDetail, setOrderDetail] = useState([]);

    useEffect(() => {

        const getAllProduct = async () => {
            try {
                const {data} = await apiRequest.getAll("products");
                setProducts(data);
            } catch (e) {
                console.log('failed to request API: ', e)
            }
        };
        const getAllSlider = async () => {
            try {
                const {data} = await apiRequest.getAll("sliders");
                setSlider(data);
            } catch (e) {
                console.log('failed to request API: ', e)
            }
        };
        const getAllCategories = async () => {
            try {
                const {data} = await apiRequest.getAll("categories");
                setCategories(data);
            } catch (e) {
                console.log('failed to request API: ', e)
            }
        };
        const getAllCategoriesBlog = async () => {
            try {
                const {data} = await apiRequest.getAll("categories_blog");
                setCategoriesBlog(data);
            } catch (e) {
                console.log('failed to request API: ', e);
            }
        };
        const getAllBlogs = async () => {
            try {
                const {data} = await apiRequest.getAll("blogs");
                setBlogs(data);
            } catch (e) {
                console.log('failed to request API: ', e)
            }
        };
        const getAllOrders = async () => {
            try {
                const {data} = await apiRequest.getAll("orders");
                setOrders(data);
            } catch (e) {
                console.log('failed to request API: ', e)
            }
        };
        const getAllOrderDetail = async () => {
            try {
                const {data} = await apiRequest.getAll("order_detail");
                setOrderDetail(data);
            } catch (e) {
                console.log('failed to request API: ', e)
            }
        };
        getAllOrderDetail();
        getAllCategoriesBlog();
        getAllBlogs();
        getAllOrders();
        getAllCategories();
        getAllProduct();
        getAllSlider();
    }, []);
//Cart
    const OnHandleCart = async (item) => {
        let flag = false;
        for (var i = 0; i < carts.length; i++) {
            if (carts[i].id == item.id) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            item.quantity = 1;
            setCart([...carts, item]);
            // const localStrCart = JSON.parse(localStorage.getItem('cart'));
            // localStrCart.push(item);

            localStorage.setItem('cart', JSON.stringify([...carts, item]));
            alert("Add Success");
        } else {
            carts[i].quantity += 1;
            setCart([...carts]);
            localStorage.setItem('cart', JSON.stringify([...carts]));
            alert("Add Success");
        }
    };
    //categories
    const onHandleCreateCategory = async (cate) => {
        const {data} = await apiRequest.create("categories", cate);

        setCategories([
            ...categories,
            data
        ])
    };
    const onHandleRemoveCategory = async (id) => {
        const getProduct = await apiRequest.getDataByElement('products', `cate_id=${id}`);
        getProduct.data.map(products => onHandleRemoveProduct(products.id));
        let result = apiRequest.removeData("categories", id);
        if (result) {
            const newData = categories.filter(cate => cate.id !== id);
            setCategories(newData);
        }
    };
    const onHandleUpdateCategory = async (id, cate) => {
        const getProduct = await apiRequest.getDataByElement('products', `cate_id=${id}`);
        console.log(getProduct);
        const {data} = await apiRequest.updateData("categories", id, cate);

        const newCategories = categories.map(cate => (cate.id === data.id ? data : cate));
        setCategories(newCategories)
    };
    //products`
    const onHandleCreateProduct = async (product) => {
        const {data} = await apiRequest.create("products", product);
        const newData = {
            id: products.length + 1,
            ...data
        };
        setProducts([
            ...products,
            newData
        ])
    };
    const onHandleUpdateProduct = async (id, product) => {
        const {data} = await apiRequest.updateData("products", id, product);
        const newProducts = products.map(pro => (pro.id === data.id ? data : pro));
        setProducts(newProducts)
    };
    const onHandleRemoveProduct = (id) => {
        let result = apiRequest.removeData("products", id);
        if (result) {
            const newProducts = products.filter(product => product.id !== id);
            setProducts(newProducts);
        }
    };
//categories_blog
    const onHandelCreateCategoryBlog = async (category) => {
        const {data} = await apiRequest.create("categories_blog", category);
        const newData = {
            id: categoriesBlog.length + 1,
            ...data
        };
        setCategoriesBlog([
            ...categoriesBlog,
            newData
        ])
    };
    const onHandelUpdateCategoryBlog = async (id, category) => {
        const {data} = await apiRequest.updateData("categories_blog", id, category);
        const newData = categoriesBlog.map(cate => (cate.id === data.id ? data : cate));
        setCategoriesBlog(newData)
    };
    const onHandelRemoveCategoryBlog = async (id) => {
        const getAllBlogs = await apiRequest.getDataByElement('blogs', `cate_id=${id}`);
        getAllBlogs.data.map(blog => onHandelRemoveBlog(blog.id));
        let result = apiRequest.removeData("categories_blog", id);
        if (result) {
            const newData = categoriesBlog.filter(cate => cate.id !== id);
            setCategoriesBlog(newData);
        }
    };

    //blogs
    const onHandelUpdateBlog = async (id, blog) => {
        const {data} = await apiRequest.updateData("categories_blog", id, blog);
        const newData = blogs.map(blog => (blog.id === data.id ? data : blog));
        setBlogs(newData)
    };
    const onHandelCreateBlog = async (blog) => {
        const {data} = await apiRequest.create("blogs", blog);
        const newData = {
            id: blogs.length + 1,
            ...data
        };
        setBlogs([
            ...blogs,
            newData
        ])
    };
    const onHandelRemoveBlog = async (id) => {
        let result = apiRequest.removeData("blogs", id);
        if (result) {
            const newData = blogs.filter(cate => cate.id !== id);
            setBlogs(newData);
        }
    };
    return (
        <div className="App">
            <Routers sliders={sliders}
                // products
                     products={products}
                     onUpdateProduct={onHandleUpdateProduct}
                     onCreateProduct={onHandleCreateProduct}
                     onRemoveProduct={onHandleRemoveProduct}
                // categories
                     categories={categories}
                     onCreateCategory={onHandleCreateCategory}
                     onRemoveCategory={onHandleRemoveCategory}
                     onUpdateCategory={onHandleUpdateCategory}
                // categories_blog
                     categories_blogs={categoriesBlog}
                     onCreateCategoriesBlog={onHandelCreateCategoryBlog}
                     onRemoveCategoriesBlog={onHandelRemoveCategoryBlog}
                     onUpdateCategoriesBlog={onHandelUpdateCategoryBlog}
                // blogs
                     blogs={blogs}
                     onCreateBlog={onHandelCreateBlog}
                     onUpdateBlog={onHandelUpdateBlog}
                     onRemoveBlog={onHandelRemoveBlog}
                // order_detail
                     order_detail={orderDetail}
                //order
                     orders={orders}
                //cart

                     onCart={OnHandleCart}

            />
        </div>
    );
};

export default App;
