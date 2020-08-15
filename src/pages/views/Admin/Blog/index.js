import React, {useState} from 'react';
import "../../../../assets/css/datatables/dataTables.bootstrap4.css"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import api from "../../../../Api";


const Index = ({blogs, categories, onRemove}) => {
    const {register, handleSubmit, errors} = useForm();
    const [search, setSearch] = useState();
    if (search) {
        blogs = search;
    }
    const submitForm = async (e) => {
        try {
            const {data} = await api.getDataByElement("blogs", `q=${e.search}`);
            setSearch(data)
        } catch (e) {
            console.log('failed to request API: ', e)
        }
    };
    const removeHandle = (id) => {
        onRemove(id)
    };

    const result = blogs.map(({id, cate_id, title, image, status}, index) => {
        const cate_name = categories.find(cate => cate.id == cate_id);
        status = status == 1 ? <span className="text-success">Active</span> :
            <span className="text-danger">Disabled</span>;
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{title}<br/>
                    ID:{id}</td>

                <td><img src={image} width="100px" alt=""/></td>

                <td>{status}</td>

                <td style={{textAlign: "center"}}>
                    <Link className="btn btn-primary" to={`/admin/blogs/edit/${id}`}><i className="fas fa-edit"></i></Link>
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

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Blogs</h6>
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
                                <th scope="col">Title</th>
                                <th scope="col">Image</th>
                                <th scope="col">Status</th>
                                <th scope="col" style={{textAlign: "center"}} colSpan="2">
                                    <Link to="/admin/blogs/create" className="btn btn-success">Create</Link>
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
