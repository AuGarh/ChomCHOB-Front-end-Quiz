import { Link } from 'react-router-dom'
import Reviews from "../components/Reviews"

const ProductList = ({ id, attributes }) => {
    const isReviewed = attributes.review.number

    return (
        <Link to={`/products/${id}`} className="product-list row" style={{ textDecoration: 'none' }}>
            <div className="col-1 product-img p-0">
                <img src={attributes.image_url} alt={attributes.name} />
            </div>
            <div className="col product-info ps-3">
                <div className="product-name">
                    {attributes.name}
                </div>
                <div className="product-description">
                    {attributes.description}
                </div>
            </div>
            <div className="col-2 text-end">
                <div className="product-price">
                    {attributes.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div>
                    {isReviewed === 0 ? '' : <Reviews value={attributes.review.number} />}
                </div>
                <div className="product-reviews">
                    {isReviewed === 0 ? '' : <span> Reviews ({isReviewed} reviews) </span>}
                </div>
            </div>
        </Link >
    )
}

export default ProductList;