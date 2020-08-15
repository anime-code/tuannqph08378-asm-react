import React from 'react';
import {Link} from "react-router-dom";


export default function Navbar({dataCate}) {
    const result = dataCate.map((item, index) => {
        return (<li key={index}><Link to={`/categories/${item.id}`}>{item.name}</Link></li>);
    });
    return (
        <div>
            <div className="header_bottom sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="main_menu_inner">
                                <div className="logo_sticky">
                                    <a href="pages/index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                </div>
                                <div className="main_menu">
                                    <nav>
                                        <ul>
                                            <li className="active"><Link to="/">Home</Link>
                                            </li>
                                            <li className="active"><Link to="/shop">Shop <i
                                                className="fa fa-angle-down"/></Link>
                                                <ul className="sub_menu">
                                                    {result}
                                                </ul>
                                            </li>
                                            <li><a href="">blog</a></li>
                                            <li><a href="">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
