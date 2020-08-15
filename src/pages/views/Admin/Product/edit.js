import React, {useEffect, useState} from 'react';
import {
    useHistory,
    useParams
} from "react-router-dom";
import {useForm} from "react-hook-form";
import api from "../../../../Api";
import firebase from "../../../../firebase";

const getAllProducts = async () => {
    try {
        const {data} = await api.getAll("products");
        return data;
    } catch (e) {
        console.log('failed to request API: ', e)
    }
};
const Edit = ({categories, products, onUpdate}) => {
    useEffect(() => {
        if (products.length == 0) {
            getAllProducts().then(products => {
                let product = products.find(product => product.id == parseInt(id));
                setCurrentProduct(product);
            })
        } else {
            let product = products.find(product => product.id == parseInt(id));
            setCurrentProduct(product);
        }

    }, []);
    const {register, handleSubmit, errors} = useForm(); // Sử dụng hook form
    const history = useHistory();
    const {id} = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    const arrImg = [];

    const onHandleChangeFile = (e) => {
        const imgs = e.target.files;
        const preview_img = document.querySelector(".img-file");
        for (let img of imgs) {
            const upload = firebase.storage.ref(`images/${img.name}`).put(img);
            upload.on('state_changed', () => {
            }, (error) => {
                console.log(error);
            }, () => {
                firebase.storage.ref('images').child(img.name).getDownloadURL().then(url => {
                    arrImg.push(url);
                    console.log(url);
                    preview_img.src = url;
                })
            });
        }

    };

    const submitForm = (data) => {
        const preview_img = document.querySelector(".img-file");


        const newData = {
                ...data,
                image: preview_img.src,
                galleries: arrImg
            }
        ;
        console.log(newData);
        onUpdate(currentProduct.id, newData);
        history.push("/admin/products");
    };

    const getCate = categories.map(({id, name}, index) => {


        return (
            <option key={index} selected={id == currentProduct.cate_id} value={id}>{name}</option>
        );
    });

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Create Product</h6>
                </div>
                <div className="card-body">
                    <form method="POST" onSubmit={handleSubmit(submitForm)}>
                        <div className="row">
                            <div className="col-2">
                                <div className="row">
                                    <div className="col-8 offset-2">
                                        <img className="img-file" width="200px" src={currentProduct.image}
                                             alt="Image preview..."/>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <input type="file" multiple onChange={onHandleChangeFile}
                                           ref={register}
                                           name="image"/>
                                    <small id="nameHelp" className="form-text text-danger">
                                        {errors.image && <span>{errors.image.message}</span>}
                                    </small>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="">Name*</label>
                                        <input ref={register({
                                            required: "Tên không được để trống",
                                            minLength: {value: 5, message: "Tên tối thiểu 5 ký tự"}
                                        })}
                                               defaultValue={currentProduct.name}
                                               type="text" name="name" className="form-control"
                                        />
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.name && <span>{errors.name.message}</span>}
                                        </small>

                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="">Categories*</label>
                                        <select name="cate_id" defaultValue={currentProduct.cate_id}
                                                ref={register}
                                                className="form-control">
                                            {getCate}
                                        </select>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="">Short Detail*</label>

                                        <input type="text" name="short_desc" defaultValue={currentProduct.short_desc}
                                               ref={register({
                                                   required: "Mô tả ngắn không được để trống",
                                               })} className="form-control"
                                        />
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.short_desc && <span>{errors.short_desc.message}</span>}
                                        </small>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="">Status*</label>
                                        <select name="status" ref={register}

                                                className="form-control ">
                                            <option className="status"  value="1">Active
                                            </option>
                                            <option className="status"  value="0">Disabled</option>
                                        </select>

                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="">Quantity*</label>

                                        <input type="number" defaultValue={currentProduct.quantity} name="quantity"
                                               ref={register({
                                                   required: "Số lượng không được để trống",
                                                   min: {value: 1, message: "Số lượng không được nhỏ hơn 1"},
                                                   max: {value: 100, message: "Số lượng không quá 100"},
                                               })} className="form-control"
                                        />
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.quantity && <span>{errors.quantity.message}</span>}
                                        </small>
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="">Price*</label>
                                        <input type="number" name="price" ref={register({
                                            required: "Giá không được để trống",
                                            min: {value: 0, message: "Giá không được nhỏ hơn 0"}
                                        })} defaultValue={currentProduct.price} className="form-control"
                                        />
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.price && <span>{errors.price.message}</span>}
                                        </small>
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="">Price Sale*</label>
                                        <input type="number" name="price_sale" ref={register({
                                            required: "Giá khuyến mãi không được để trống",
                                            min: {value: 0, message: "Giá khuyến mãi không được nhỏ hơn 0"},
                                        })} defaultValue={currentProduct.price_sale} className="form-control"
                                        />
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.price_sale && <span>{errors.price_sale.message}</span>}
                                        </small>
                                    </div>
                                    <div className="form-group col-12">
                                        <label htmlFor="exampleFormControlTextarea1">Detail</label>
                                        <textarea className="form-control"
                                                  ref={register({required: "Chi tiết sản phẩm không được để trống"})}
                                                  name="detail" id="exampleFormControlTextarea1"
                                                  defaultValue={currentProduct.detail} rows="3"></textarea>
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.detail && <span>{errors.detail.message}</span>}
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
