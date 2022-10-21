import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { decrement, deletecart, increment } from '../redux/action/cart.action';
import { getProduct } from '../redux/action/product.action';
import CloseIcon from '@mui/icons-material/Close';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { postorder } from '../redux/action/orderplaced.action';
import { Button, DialogActions, DialogContent, TextField } from '@mui/material';
// import { postorder } from '../redux/action/orderplaced.action';

function Cart(props) {
    const cart = useSelector(state => state.cart);
    const [cartData, setCartData] = useState([])
    const [placeorder, setPlaceorder] = useState(false)
    const history = useHistory()
    const product = useSelector(state => state.product);
    const productItem = product.product;
    const cartItem = cart.cart;
    console.log(cart);
    // const cartData = [];
    let Total;

    const dispatch = useDispatch();
    console.log(product);
    const cartDataFun = () => {
        const Procart = [];
        productItem.map((j) => {
            cartItem.map((s) => {
                if (j.id === s.id) {
                    console.log(j.id);
                    console.log(s.id);
                    const quacount = {
                        ...j,
                        qty: s.qty
                    }
                    console.log(s.qty);
                    Procart.push(quacount)
                }
            })
        })
        setCartData(Procart)
    }
    let TotalAmount = 0;
    cartData.map((c) => {
        Total = parseInt(c.price) * c.qty;
        console.log("cdcdcdcd", c.qty);
        TotalAmount = TotalAmount + Total;
    })

    const Discount = Math.round(TotalAmount * 0.05);
    const FinalAmount = TotalAmount - Discount;

    console.log(Total);

    console.log(cartData);
    const handleDelete = (id) => {
        dispatch(deletecart(id))
    }

    const handleincriment = (id) => {
        dispatch(increment(id))
    }
    const handledecrement = (id) => {
        console.log(id);
        dispatch(decrement(id))
    }
    const orderplace = () => {
        setPlaceorder(true)
    }

    useEffect(() => {
        dispatch(getProduct())
        cartDataFun();
    }, [cartItem])

    let schema = yup.object().shape({
        user_name: yup.string().required("Please enter name"),
        user_email: yup.string().required("Please enter email"),
        user_address: yup.string().required("please enter address").max(100, 'Must be exactly 100 digits'),
        user_phone: yup.number().required("please enter Phone number"),

    });

    const formik = useFormik({
        initialValues: {
            user_name: '',
            user_email: '',
            user_address: "",
            user_phone: "",
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            const submitorder = {
                userDetails: values,
                cartDetails: cartData
            };
            history.push('/')
            dispatch(postorder(submitorder))
            resetForm();

        }


    });

    return (
        <>
            <div>
                {/* Start Banner Area */}
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Shopping Cart</h1>
                                <nav className="d-flex align-items-center">
                                    <a href="index.html">Home<span className="lnr lnr-arrow-right" /></a>
                                    <a href="category.html">Cart</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner Area */}
                {/*================Cart Area =================*/}
                <section className="cart_area">
                    <div className="container">
                        <div className="cart_inner">
                            {placeorder ?

                                <Formik value={formik}>
                                    <Form key={formik} onSubmit={formik.handleSubmit}>
                                        <DialogContent>

                                            <TextField

                                                margin="dense"
                                                id="user_name"
                                                name="user_name"
                                                value={formik.values.user_name}
                                                label="Name"
                                                fullWidth
                                                variant="standard"
                                                onChange={formik.handleChange}

                                            />
                                            {
                                                formik.errors.user_name ? <p>{formik.errors.user_name}</p> : null
                                            }

                                            <TextField

                                                margin="dense"
                                                id="user_email"
                                                name="user_email"
                                                value={formik.values.user_email}
                                                label="email"
                                                fullWidth
                                                variant="standard"
                                                onChange={formik.handleChange}

                                            />
                                            {
                                                formik.errors.user_email ? <p>{formik.errors.user_email}</p> : null
                                            }

                                            <TextField

                                                margin="dense"
                                                id="user_address"
                                                name="user_address"
                                                value={formik.values.user_address}
                                                label="Address"
                                                fullWidth
                                                variant="standard"
                                                onChange={formik.handleChange}

                                            />
                                            {
                                                formik.errors.user_address ? <p>{formik.errors.user_address}</p> : null
                                            }

                                            <TextField

                                                margin="dense"
                                                id="user_phone"
                                                name="user_phone"
                                                value={formik.values.user_phone}
                                                label="phone Number"
                                                fullWidth
                                                variant="standard"
                                                onChange={formik.handleChange}

                                            />
                                            {
                                                formik.errors.user_phone ? <p>{formik.errors.user_phone}</p> : null
                                            }



                                        </DialogContent>
                                        <DialogActions>
                                            <Button type="submit">Submit</Button>
                                        </DialogActions>
                                    </Form>
                                </Formik>


                                :
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            {
                                                cartData.map((f) => {
                                                    console.log(f);
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <div className="media">
                                                                        <div className="d-flex">
                                                                            <img src={f.url} className='card-img' alt />
                                                                        </div>
                                                                        <div className="media-body">
                                                                            <p>{f.productname}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5>${f.price}</h5>
                                                                </td>
                                                                <td>
                                                                    <div className="product_count">

                                                                        <button className="increase items-count" type="button" onClick={() => handleincriment(f.id)}>+</button><br />
                                                                        <p>{f.qty}</p>
                                                                        <button className="reduced items-count" type="button" onClick={() => handledecrement(f.id)} disabled={f.qty === 1 && true}>-</button>

                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h5>${f.price * f.qty}</h5>
                                                                </td>

                                                                <td className="">
                                                                    <a href="" onClick={() => handleDelete(f.id)}  ><CloseIcon /></a>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                            {/* <tr className="bottom_button">
                                            <td>
                                                <a className="gray_btn" href="#">Update Cart</a>
                                            </td>
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                            <td>
                                                <div className="cupon_text d-flex align-items-center">
                                                    <input type="text" placeholder="Coupon Code" />
                                                    <a className="primary-btn" href="#">Apply</a>
                                                    <a className="gray_btn" href="#">Close Coupon</a>
                                                </div>
                                            </td>
                                        </tr> */}
                                            <tr>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                    <h5>Discount (10%)</h5>
                                                </td>
                                                <td>
                                                    <h5>${Discount}</h5>
                                                    <p className='mt-2 mb-0 pb-0'>You will save $ {FinalAmount - Total} on this order</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>

                                                </td>
                                                <td>
                                                </td>
                                                <td>

                                                    <h5>Subtotal</h5>
                                                </td>
                                                <td>
                                                    <h5>${FinalAmount}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                    <h5>Delivery charges</h5>
                                                </td>
                                                <td>
                                                    <h5 className='free-shipping'>Free</h5>
                                                </td>

                                            </tr>


                                            {/* <tr className="shipping_area">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                            <td>
                                                <h5>Shipping</h5>
                                            </td>
                                            <td>
                                                <div className="shipping_box">
                                                    <ul className="list">
                                                        <li><a href="#">Flat Rate: $5.00</a></li>
                                                        <li><a href="#">Free Shipping</a></li>
                                                        <li><a href="#">Flat Rate: $10.00</a></li>
                                                        <li className="active"><a href="#">Local Delivery: $2.00</a></li>
                                                    </ul>
                                                    <h6>Calculate Shipping <i className="fa fa-caret-down" aria-hidden="true" /></h6>
                                                    <select className="shipping_select">
                                                        <option value={1}>Bangladesh</option>
                                                        <option value={2}>India</option>
                                                        <option value={4}>Pakistan</option>
                                                    </select>
                                                    <select className="shipping_select">
                                                        <option value={1}>Select a State</option>
                                                        <option value={2}>Select a State</option>
                                                        <option value={4}>Select a State</option>
                                                    </select>
                                                    <input type="text" placeholder="Postcode/Zipcode" />
                                                    <a className="gray_btn" href="#">Update Details</a>
                                                </div>
                                            </td>
                                        </tr> */}
                                            <tr className="out_button_area">
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                    <div className="checkout_btn_inner d-flex align-items-center">
                                                        <a className="gray_btn" href='/SingleProduct'>Continue Shopping</a>


                                                        {placeorder ?
                                                            <div className='row'>
                                                                <div>
                                                                    <div>
                                                                        <div>
                                                                            <button className="primary-btn border-0"><a href onClick={orderplace}> Place Order</a></button>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            :
                                                            <div className='row'>
                                                                <div>
                                                                    <div>
                                                                        <div>
                                                                            <button className="primary-btn border-0"><a href onClick={orderplace} > Place Order</a></button>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
}
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Cart;