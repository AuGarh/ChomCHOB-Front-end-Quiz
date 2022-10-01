import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/CartConstants'
import { product_detail, authorization } from '../utils/constants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(
        product_detail + id, {
        headers: {
            'Authorization': authorization
        }
    }
    )

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.data.id,
            name: data.data.attributes.name,
            image: data.data.attributes.image_url,
            price: data.data.attributes.price,
            qty,
        },
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}