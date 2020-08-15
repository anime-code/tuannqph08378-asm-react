import React, {Component, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import firebase from "../../../../firebase";
import api from "../../../../Api";


const Create = ({categories, onCreate}) => {

    const {register, handleSubmit, errors} = useForm(); // Sử dụng hook form
    const history = useHistory();
    const onHandleChangeFile = (e) => {
        const imgs = e.target.files[0];
        const preview_img = document.querySelector(".img-file");
        const upload = firebase.storage.ref(`images/${imgs.name}`).put(imgs);
        upload.on('state_changed', () => {
        }, (error) => {
            console.log(error);
        }, () => {
            firebase.storage.ref('images').child(imgs.name).getDownloadURL().then(url => {
                preview_img.src = url;
            })
        });
    };
    const submitForm = (data) => {
        const preview = document.querySelector('.img-file');
        const newData = {
            ...data,
            image: preview.src,
        };

        onCreate(newData);

        history.push("/admin/categories_blog");
    };
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Create</h6>
                </div>
                <div className="card-body">
                    <form method="POST" onSubmit={handleSubmit(submitForm)}>
                        <div className="row">
                            <div className="col-2">
                                <div className="row">
                                    <div className="col-8 offset-2">
                                        <img className="img-file" width="200px" src="" alt="Image preview..."/>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <input type="file" onChange={onHandleChangeFile}
                                           ref={register({required: "Ảnh không được để trống"})}
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
                                        <input
                                            ref={register({
                                                required: "Tên không được để trống",
                                                minLength: {value: 5, message: "Tên tối thiểu 5 ký tự"}
                                            })}
                                            type="text" name="name" className="form-control"
                                            placeholder=""/>
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.name && <span>{errors.name.message}</span>}
                                        </small>

                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="">Status*</label>
                                        <select ref={register} className="form-control" name="status">
                                            <option value="1">Active</option>
                                            <option value="0">Disable</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-12">
                                        <label htmlFor="exampleFormControlTextarea1">Detail</label>
                                        <textarea className="form-control"
                                                  ref={register({required: "Chi tiết  không được để trống"})}
                                                  name="detail" id="exampleFormControlTextarea1"
                                                  rows="3"></textarea>
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
    )
};
export default Create;
