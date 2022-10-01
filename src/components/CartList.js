

const CartList = (data) => {

    const sum = data.price * data.qty

    return (
        <tr>
            <th className="cart-list-img">
                <img src={data.image} alt={data.name}/>
            </th>
            <td className="cart-list-name">
                {data.name}
            </td>
            <td className="text-center cart-price">
                {data.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </td>
            <td className="text-center cart-qty">
                {data.qty}
            </td>
            <td className="text-end cart-total">
                {sum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </td>
        </tr>
    )
}

export default CartList