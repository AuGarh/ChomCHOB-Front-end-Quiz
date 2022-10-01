import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BagTick, Minus, Add } from 'iconsax-react';
import { listProductDetails } from '../actions/ProductActions'
import Loader from '../components/Loader'
import Reviews from '../components/Reviews'
import { Alert } from 'react-bootstrap'


const ProductDetail = () => {

    const path = window.location.pathname
    const id = path.split('/')[2]

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { product, loading, error } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id])

    const [qty, setQty] = useState(1)

    const minus = (e) => qty !== 1 ? setQty(qty - 1) : ''
    const plus = (e) => setQty(qty + 1)


    return (
        <section className="product-detail-container container">
            {loading ? (
                <Loader />
            ) : error ? (
                <Alert variant='danger'>{error}</Alert>
            ) : product.data ? (
                <>
                    <div className="row">
                        <div className="product-detail-img col-5">
                            <img src={product.data.attributes.image_url} alt={product.data.attributes.name} />
                        </div>
                        <div className="product-detail col">
                            <div className="product-detail-name">{product.data.attributes.name}</div>
                            <div className="product-detail-reviews my-3">
                                <Reviews value={product.data.attributes.review.rating} />
                                <span className="ms-2">({product.data.attributes.review.number} reviews)</span>
                            </div>
                            <div className="product-detail-description">
                                {product.data.attributes.description}
                            </div>
                            <div className="mt-4">
                                <div className="product-detail-price-txt">
                                    Price
                                </div>
                                <div className="product-detail-price-number">
                                    {product.data.attributes.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </div>
                            </div>
                            <div className="row">
                                <div className="row col-7 my-4 d-flex align-items-center">
                                    <div className="product-detail-quantitiy-text col">
                                    </div>
                                    <div className="col-6">
                                        <div className="product-detail-quantitiy-input d-flex justify-content-between align-items-center">
                                            <button className="btn btn-minus" type="button" onClick={minus}>
                                                <Minus
                                                    size="16"
                                                    color="#484848"
                                                />
                                            </button>
                                            <div className="product-detail-quantitiy-count" onChange={e => setQty(e.target.value)}>{qty}</div>
                                            <button className="btn btn-plus" type="button" onClick={plus}>
                                                <Add
                                                    size="16"
                                                    color="#484848"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <Link to={`/cart/${id}?qty=${qty}`} className="col-6" style={{ textDecoration: 'none' }}>
                                    <button className="btn btn-cart btn-lg my-2 px-2">
                                        <BagTick color="#fff" />
                                        <span className="m-2">ADD TO CART</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            ) : ''}
        </section>
    );
};

export default ProductDetail;