import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import { listProducts } from '../actions/ProductActions'
import Loader from '../components/Loader'
import classNames from "classnames";
import { Alert } from 'react-bootstrap'
import { RowVertical, Element3 } from 'iconsax-react';




const Home = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { products, loading, error } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const [currentView, setCurrentView] = useState("grid");

    const handleToggleCurrentView = useCallback(() => {
        setCurrentView(view => (view === "list" ? "grid" : "list"));
    }, [setCurrentView]);

    const isDetailedView = currentView === "list";


    return (
        <main>
            {loading ? (
                <Loader />
            ) : error ? (
                <Alert variant='danger'>{error}</Alert>
            ) : products.data ? (
                <>
                    <div className="container products-header">
                        <p className="m-0">Products ({products.data.length})</p>
                        <hr />
                        <div className="btn-group" >

                            <button type="button" className={classNames("btn btn-grid", { "active": !isDetailedView })} onClick={handleToggleCurrentView} disabled={!isDetailedView}>
                                <Element3
                                    color="#292D32"
                                />
                            </button>
                            <button type="button" className={classNames("btn btn-list", { "active": isDetailedView })} onClick={handleToggleCurrentView} disabled={isDetailedView}>
                                <RowVertical
                                    color="#292D32"
                                />
                            </button>
                        </div>
                    </div>
                    
                    <section className={classNames("container products-container mt-1", { "products-list": isDetailedView })}>
                        {!isDetailedView ? (
                            products.data.map((product) => {
                                return <ProductCard
                                    key={product.id} {...product}
                                    />;
                            }
                            )
                        ) : (
                            products.data.map((product) => {
                                return <ProductList
                                    key={product.id} {...product}
                                    />;
                            }
                            )
                        )
                        }
                    </section>
                </>
            ) : ''}
        </main>
    )
}

export default Home