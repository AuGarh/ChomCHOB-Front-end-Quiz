import { Link } from 'react-router-dom'
import Reviews from "../components/Reviews"

const ProductCard = ({ id, attributes }) => {
    const isReviewed = attributes.review.number

    return (
        <Link to={`/products/${id}`} className="product-card" style={{ textDecoration: 'none' }}>
            <div className="product-img">
                <img src={attributes.image_url} alt={attributes.name} />
            </div>

            <div className="product-info pt-4">
                <div className="row">
                    <div className="col-3 align-self-start">
                        <div className="product-logo">
                            <img src={attributes.brand.data.attributes.logo_url} alt={attributes.brand.data.attributes.name} />
                        </div>
                    </div>
                    <div className="col ps-0">
                        <p className="product-name">{attributes.name}</p>
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="row col offset-3 ps-0">
                        <div className="col-4 ps-0">
                            <span>Price</span>
                        </div>
                        <div className="col">
                            {isReviewed === 0 ? '' : <span> Reviews ({isReviewed} reviews) </span>}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="row col offset-3 ps-0">
                        <div className="col-4 ps-0">
                            <p className="product-price">{attributes.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                        <div className="col d-flex justify-content">
                            {isReviewed === 0 ? '' : <Reviews value={attributes.review.number} />}
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default ProductCard;