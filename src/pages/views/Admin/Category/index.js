import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import api from "../../../../Api";

const Index = ({categories, onRemove}) => {
    const removeHandle = (id) => {
        // console.log('da vao')
        onRemove(id)
    };
    const {register, handleSubmit, errors} = useForm();
    const [search, setSearch] = useState();
    if (search) {
        categories = search;
    }
    const submitForm = async (e) => {
        try {
            const {data} = await api.getDataByElement("categories", `q=${e.search}`);
            setSearch(data)
        } catch (e) {
            console.log('failed to request API: ', e)
        }
    };
    const result = categories.map(({id, name, image, status}, index) => {
        status = status == 1 ? <span className="text-success">Active</span> :
            <span className="text-danger">Disabled</span>;
        return (
            <tr key={index}>
                <td>{index + 1}</td>


                <td>{name}<br/>
                    ID:{id}</td>
                <td>{status}</td>
                <td style={{textAlign: "center"}}>
                    <Link className="btn btn-info" to={`/admin/categories/${id}/products`}>Show Products</Link>
                </td>
                <td style={{textAlign: "center"}}>
                    <Link className="btn btn-primary" to={`/admin/categories/edit/${id}`}><i className="fas fa-edit"></i></Link>
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
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories</h6>
                </div>
                <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                        <nav className="navbar navbar-light">
                            <form className="form-inline" >
                                <input name="search" onChange={handleSubmit(submitForm)} ref={register} className="form-control mr-sm-2" type="search"
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
                                <th scope="col">Status</th>
                                <th scope="col" style={{textAlign: "center"}} colSpan="3">
                                    <Link to="/admin/categories/create" className="btn btn-success">Create</Link>
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
