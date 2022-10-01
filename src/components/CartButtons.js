import { BagHappy } from 'iconsax-react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'



const CartButtons = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    return (
        <NavLink to="/ChomCHOB-Front-end-Quiz/cart" className={`navbar-cart`}>
            <BagHappy color="#ffffff" />
            <span>Cart</span>
            
            <span className="cart-amount">
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
            </span>

        </NavLink>
    )
}

export default CartButtons