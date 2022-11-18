import {NavLink } from "react-router-dom";
import React from "react";

const PageHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="pd-y-20"><NavLink to={"/"}>My Reads</NavLink></h1>
                <div className="main-nav">

                    <nav>
                        <ul>
                            <li><NavLink to={"/"}>Home</NavLink ></li>
                            <li><NavLink to={"/search"}>Search</NavLink ></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}
export default PageHeader
