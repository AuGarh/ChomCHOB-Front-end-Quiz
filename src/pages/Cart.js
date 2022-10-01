import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/CartActions'
import CartList from '../components/CartList'
import { Alert } from 'react-bootstrap'



const Cart = () => {

    const path = window.location.pathname
    const productId = path.split('/')[3]

    const qty = Number(window.location.search.split('=')[1])

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    for (let i = 0; i < cartItems.length - 1; i++) {
        if (cartItems[cartItems.length - 1].product === cartItems[i].product) {
            cartItems[cartItems.length - 1].qty += cartItems[i].qty
            cartItems.splice(i, 1)
        }
    }

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeCart = () => {
        localStorage.removeItem("cartItems")
    }

    return (
        <section className="cart-container container">
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <Alert>
                    ตะกร้ายังว่างๆอยู่นะค้าบ <Link to='/ChomCHOB-Front-end-Quiz'>กลับไปช็อปก่อนดีไหมจ๊ะ</Link>
                </Alert>
            ) : (
                <>
                    <table className="table">
                        <thead>
                            <tr className="cart-header">
                                <th scope="col-8" colSpan="2">
                                    PRODUCT NAME
                                </th>
                                <th scope="col-1" className="text-center">
                                    PRICE
                                </th>
                                <th scope="col-2" className="text-center" >
                                    QUANTITY
                                </th>
                                <th scope="col-1" className="text-end">
                                    TOTAL
                                </th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {cartItems.map((product) => {
                                return <CartList key={product.product} {...product} />;
                            }
                            )}
                        </tbody>
                    </table>

                    <div className="d-flex justify-content-end align-items-center">
                        <span className="cart-subtotal m-3">
                            Subtotal (
                            {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                            Product):
                        </span>
                        <span className="cart-price-sum">
                            {cartItems
                                .reduce((acc, item) => acc + item.qty * item.price, 0)
                                .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    </div>

                    <div className="row">
                        <a className="col-3 offset-9" href="/ChomCHOB-Front-end-Quiz" >
                            <button className="btn btn-cart btn-lg mt-2" onClick={removeCart}>
                                Proceed to checkout
                            </button>
                        </a>
                    </div>
                </>
            )}
        </section>
    )
}

export default Cart