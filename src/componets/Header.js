import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    
    return (
        <>
            <header className="header_area sticky-header">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink exact className="nav-link" to={"/"}>Home</NavLink>
                                        {/* <a className="nav-link" href="index.html">Home</a> */}
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <NavLink className="nav-link"  to={"/Category"} >Shop Category</NavLink>
                                                {/* <a className="nav-link" href="category.html">Shop Category</a> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link"  to={"/CategoryAdmin"} >Shop Category Admin</NavLink>
                                                {/* <a className="nav-link" href="category.html">Shop Category</a> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/SingleProduct"}>Product </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/ProductAdmin"}>Product Admin</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/CheckOut"} >Product Checkout</NavLink>
                                                {/* <a className="nav-link" href="checkout.html">Product Checkout</a> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link"  to={"/Cart"}>Shopping Cart</NavLink>
                                                {/* <a className="nav-link" href="cart.html">Shopping Cart</a> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/Confirmation"}>Confirmation</NavLink>
                                                {/* <a className="nav-link" href="confirmation.html">Confirmation</a> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/ProductDetails"}>ProductDetails</NavLink>
                                                {/* <a className="nav-link" href="confirmation.html">Confirmation</a> */}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/Blog"}>Blog</NavLink>
                                                {/* <a className="nav-link" href="blog.html">Blog</a> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/SingleBlog"}>Blog Details</NavLink>
                                                {/* <a className="nav-link" href="single-blog.html">Blog Details</a> */}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/Login"}>Login</NavLink>
                                                {/* <a className="nav-link">Login</a> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/Tracking"}>Tracking</NavLink>
                                                {/* <a className="nav-link">Tracking</a> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/Elements"}>Elements</NavLink>
                                                {/* <a className="nav-link">Elements</a> */}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link"  to={"/Contect"}>Contact</NavLink>
                                        {/* <a className="nav-link" href="contact.html">Contact</a> */}
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="nav-item"><a href="#" className="cart"><span className="ti-bag" /></a></li>
                                    <li className="nav-item">
                                        <button className="search"><span className="lnr lnr-magnifier" id="search" /></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* <div className="search_input" id="search_input_box">
                    <div className="container">
                        <form className="d-flex justify-content-between">
                            <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                            <button type="submit" className="btn" />
                            <span className="lnr lnr-cross" id="close_search" title="Close Search" />
                        </form>
                    </div>
                </div> */}
            </header>

        </>
    );
}

export default Header;