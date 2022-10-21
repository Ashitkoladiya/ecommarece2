import React from 'react';

function Tracking(props) {
    return (
        <>
            <div>
                {/* Start Banner Area */}
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Order Tracking</h1>
                                <nav className="d-flex align-items-center">
                                    <a href="index.html">Home<span className="lnr lnr-arrow-right" /></a>
                                    <a href="category.html">Fashon Category</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner Area */}
                {/*================Tracking Box Area =================*/}
                <section className="tracking_box_area section_gap">
                    <div className="container">
                        <div className="tracking_box_inner">
                            <p>To track your order please enter your Order ID in the box below and press the "Track" button. This
                                was given to you on your receipt and in the confirmation email you should have received.</p>
                            <form className="row tracking_form" action="#" method="post" noValidate="novalidate">
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="order" name="order" placeholder="Order ID" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Order ID'" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Billing Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Billing Email Address'" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <button type="submit" value="submit" className="primary-btn">Track Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Tracking;