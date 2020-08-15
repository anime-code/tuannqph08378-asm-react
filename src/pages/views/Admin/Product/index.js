import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import api from "../../../../Api/index";

const Index = ({products, onRemove, categories}) => {
    const {register, handleSubmit, errors} = useForm();
    const [search, setSearch] = useState();
    if (search) {
        products = search;
    }
    const submitForm = async (e) => {
        try {
            const {data} = await api.getDataByElement("products", `q=${e.search}`);
            setSearch(data)
        } catch (e) {
            console.log('failed to request API: ', e)
        }
    };
    const removeHandle = (id) => {
        onRemove(id)
    };
    const getGallery = products.map((product, index) => {
        // console.log(product.galleries);
    });
    const result = products.map(({id, cate_id, name, image, price, price_sale, quantity, status}, index) => {
        const cate_name = categories.find(cate => cate.id == cate_id);
        let statusQuantity = quantity >= 1 ? <span className="text-success">Còn Hàng</span> :
            <span className="text-danger">Hết Hàng</span>;
        status = status == 1 ? <span className="text-success">Active</span> :
            <span className="text-danger">Disabled</span>;
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}<br/>
                    ID:{id}</td>
                <td>{cate_name.name}</td>
                <td><img src={image} width="100px" alt=""/></td>
                <td>{price}</td>
                <td>{price_sale}</td>
                <td>{statusQuantity}({quantity})</td>
                <td>{status}</td>
                {/*<td style={{textAlign: "center"}}>*/}
                {/*    <button type="button" className="btn btn-primary" data-toggle="modal"*/}
                {/*            data-target="#exampleModal">*/}
                {/*        Show Galleries*/}
                {/*    </button>*/}
                {/*</td>*/}
                <td style={{textAlign: "center"}}>
                    <Link className="btn btn-primary" to={`/admin/products/edit/${id}`}><i className="fas fa-edit"></i></Link>
                </td>
                <td style={{textAlign: "center"}}>
                    <button className="btn btn-danger" onClick={() => {
                        if (window.confirm("Delete?")) {
                            removeHandle(id)
                        }
                    }}><i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    });

    return (

        <div className="container-fluid">
            {/* Page Heading */}
            {/* DataTales Example */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            {getGallery}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card shadow mb-4">

                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Products</h6>
                </div>
                <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                        <nav className="navbar navbar-light">
                            <form className="form-inline">
                                <input name="search" onChange={handleSubmit(submitForm)} ref={register}
                                       className="form-control mr-sm-2" type="search"
                                       placeholder="Search"
                                       aria-label="Search"/>
                                {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                            </form>
                        </nav>
                    </div>

                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Price Sale</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Status</th>
                                <th scope="col" style={{textAlign: "center"}} colSpan="2">
                                    <Link to="/admin/products/create" className="btn btn-success">Create</Link>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {result}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Index;
