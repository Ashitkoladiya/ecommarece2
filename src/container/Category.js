import React, { useEffect, useState } from 'react';
import { getCategory } from '../redux/action/category.action';
import { useDispatch, useSelector } from 'react-redux';
import categoryApi from '../Api/categoryApi'
import CategoryWiseProduct from '../CategoryWiseProduct';
import categoriscard from '../Api/categoriscard';





function Category(props) {


    const dispatch = useDispatch();


    const [category, setcategory] = useState([]);
    const Categories = useSelector(state => state.category);
    




    // console.log(Categories);


    // const handleClick = (params) => {
    //     console.log(params);
    // }

    // const filterItem=(category)=>{
    //    {

    //     category.filter((curElem)=>{

    //         return curElem.category===category;
    //         // console.log(curElem);
    //     })
    //    }
    //     // setcategory(updateItem);
    // }

    useEffect(
        () => {
            dispatch(getCategory());
            setcategory(Categories.category);
        }, []
    )


    return (
        <>



            <div>


                {/* Start Banner Area */}
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Shop Category page</h1>
                                <nav className="d-flex align-items-center">
                                    <a href="index.html">Home<span className="lnr lnr-arrow-right" /></a>
                                    <a href="#">Shop<span className="lnr lnr-arrow-right" /></a>
                                    <a href="category.html">Fashon Category</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>



                {/* End Banner Area */}
                <div className="container">
                    <div className="row">
                        {/* <center>
                            <nav className='p-5'>
                                <button onClick={()=>filterItem("SHOES")}>man</button>
                                <button>woman</button>
                                <button>shoes</button>
                                <button>electronic</button>
                            </nav>
                        </center> */}
                        {/* <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="sidebar-categories">
                                <div className="head">Browse Categories</div>

                            </div>
                            <div className="sidebar-filter mt-50">
                                <div className="top-filter-head">Product Filters</div>

                                <div className="common-filter">
                                    <div className="head">Color</div>
                                    <form action="#">

                                    </form>
                                </div>
                                <div className="common-filter">
                                    <div className="head">Price</div>
                                    <div className="price-range-area">
                                        <div id="price-range" />
                                        <div className="value-wrapper d-flex">
                                            <div className="price">Price:</div>
                                            <span>$</span>
                                            <div id="lower-value" />
                                            <div className="to">to</div>
                                            <span>$</span>
                                            <div id="upper-value" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-9 col-lg-8 col-md-7">


                            {/* Start Filter Bar */}


                            {/* <div className="filter-bar d-flex flex-wrap align-items-center">
                                <div className="sorting">
                                    <select>
                                        <option value={1}>Default sorting</option>
                                        <option value={1}>Default sorting</option>
                                        <option value={1}>Default sorting</option>
                                    </select>
                                </div>
                                <div className="sorting mr-auto">
                                    <select>
                                        <option value={1}>Show 12</option>
                                        <option value={1}>Show 12</option>
                                        <option value={1}>Show 12</option>
                                    </select>
                                </div>
                                <div className="pagination">
                                    <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true" /></a>
                                    <a href="#" className="active">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true" /></a>
                                    <a href="#">6</a>
                                    <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                                </div>
                            </div> */}
                            {/* End Filter Bar */}
                            {/* Start Best Seller */}
                            <section className="lattest-product-area pb-40 category-list">
                                <div className="row">

                                    {


                                        category.map((values) => {
                                            const { id, categoryname, url } = values;
                                            console.log(values);
                                            return (
                                                <>


                                                    {/* single product */}
                                                    <div className="col-lg-4 col-md-6" key={id}>
                                                        <div className="single-product">
                                                            <img className="img-fluid " src={url} />
                                                            <div className="product-details">
                                                                <h6>Name:{categoryname}</h6>
                                                                <div className="price">
                                                                    <button>Click To More</button>
                                                                </div>

                                                                {/* <div className="prd-bottom">
                                                                    <a href className="social-info">
                                                                        <span className="ti-bag" />
                                                                        <p className="hover-text">add to bag</p>
                                                                    </a>
                                                                    <a href className="social-info">
                                                                        <span className="lnr lnr-heart" />
                                                                        <p className="hover-text">Wishlist</p>
                                                                    </a>
                                                                    <a href className="social-info">
                                                                        <span className="lnr lnr-sync" />
                                                                        <p className="hover-text">compare</p>
                                                                    </a>
                                                                    <a href className="social-info">
                                                                        <span className="lnr lnr-move" />
                                                                        <p className="hover-text">view more</p>
                                                                    </a>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })





                                    }
                                   





                                    {/* single product */}
                                    {/* <div className="col-lg-4 col-md-6">
                                        <div className="single-product">
                                            <img className="img-fluid" src="img/product/p2.jpg" alt />
                                            <div className="product-details">
                                                <h6>addidas New Hammer sole
                                                    for Sports person</h6>
                                                <div className="price">
                                                    <h6>$150.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                                <div className="prd-bottom">
                                                    <a href className="social-info">
                                                        <span className="ti-bag" />
                                                        <p className="hover-text">add to bag</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-heart" />
                                                        <p className="hover-text">Wishlist</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-sync" />
                                                        <p className="hover-text">compare</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-move" />
                                                        <p className="hover-text">view more</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* single product */}
                                    {/* <div className="col-lg-4 col-md-6">
                                        <div className="single-product">
                                            <img className="img-fluid" src="img/product/p3.jpg" alt />
                                            <div className="product-details">
                                                <h6>addidas New Hammer sole
                                                    for Sports person</h6>
                                                <div className="price">
                                                    <h6>$150.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                                <div className="prd-bottom">
                                                    <a href className="social-info">
                                                        <span className="ti-bag" />
                                                        <p className="hover-text">add to bag</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-heart" />
                                                        <p className="hover-text">Wishlist</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-sync" />
                                                        <p className="hover-text">compare</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-move" />
                                                        <p className="hover-text">view more</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* single product */}
                                    {/* <div className="col-lg-4 col-md-6">
                                        <div className="single-product">
                                            <img className="img-fluid" src="img/product/p4.jpg" alt />
                                            <div className="product-details">
                                                <h6>addidas New Hammer sole
                                                    for Sports person</h6>
                                                <div className="price">
                                                    <h6>$150.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                                <div className="prd-bottom">
                                                    <a href className="social-info">
                                                        <span className="ti-bag" />
                                                        <p className="hover-text">add to bag</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-heart" />
                                                        <p className="hover-text">Wishlist</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-sync" />
                                                        <p className="hover-text">compare</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-move" />
                                                        <p className="hover-text">view more</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* single product */}
                                    {/* <div className="col-lg-4 col-md-6">
                                        <div className="single-product">
                                            <img className="img-fluid" src="img/product/p5.jpg" alt />
                                            <div className="product-details">
                                                <h6>addidas New Hammer sole
                                                    for Sports person</h6>
                                                <div className="price">
                                                    <h6>$150.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                                <div className="prd-bottom">
                                                    <a href className="social-info">
                                                        <span className="ti-bag" />
                                                        <p className="hover-text">add to bag</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-heart" />
                                                        <p className="hover-text">Wishlist</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-sync" />
                                                        <p className="hover-text">compare</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-move" />
                                                        <p className="hover-text">view more</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* single product */}
                                    {/* <div className="col-lg-4 col-md-6">
                                        <div className="single-product">
                                            <img className="img-fluid" src="img/product/p6.jpg" alt />
                                            <div className="product-details">
                                                <h6>addidas New Hammer sole
                                                    for Sports person</h6>
                                                <div className="price">
                                                    <h6>$150.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                                <div className="prd-bottom">
                                                    <a href className="social-info">
                                                        <span className="ti-bag" />
                                                        <p className="hover-text">add to bag</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-heart" />
                                                        <p className="hover-text">Wishlist</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-sync" />
                                                        <p className="hover-text">compare</p>
                                                    </a>
                                                    <a href className="social-info">
                                                        <span className="lnr lnr-move" />
                                                        <p className="hover-text">view more</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </section>
                            {/* End Best Seller */}
                            {/* Start Filter Bar */}
                            {/* <div className="filter-bar d-flex flex-wrap align-items-center">
                                <div className="sorting mr-auto">
                                    <select>
                                        <option value={1}>Show 12</option>
                                        <option value={1}>Show 12</option>
                                        <option value={1}>Show 12</option>
                                    </select>
                                </div>
                                <div className="pagination">
                                    <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true" /></a>
                                    <a href="#" className="active">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true" /></a>
                                    <a href="#">6</a>
                                    <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                                </div>
                            </div> */}
                            {/* End Filter Bar */}
                        </div>
                    </div>
                </div>
                {/* Start related-product Area */}
                {/* <section className="related-product-area section_gap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="section-title">
                                    <h1>Deals of the Week</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r1.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r2.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r3.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r5.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r6.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r7.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r9.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r10.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r11.jpg" alt /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ctg-right">
                                    <a href="#" target="_blank">
                                        <img className="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

        </>
    );
}

export default Category;