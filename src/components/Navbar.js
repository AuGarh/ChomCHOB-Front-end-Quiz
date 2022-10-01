import CartButtons from './CartButtons'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    <img src="https://sagnerli.sirv.com/cc-quiz/cob-logo.png" alt=''></img>
                </NavLink>

                <div>
                    <div className="navbar-nav">
                        <NavLink to="/ChomCHOB-Front-end-Quiz" className={`nav-link`}>Home</NavLink>
                        <div className="nav-link">New Products</div>
                        <div className="nav-link">Women</div>
                        <div className="nav-link">Men</div>
                        <div className="nav-link">Kid</div>
                        <div className="nav-link">Accessories</div>
                    </div>
                </div>
                
                <div className="cart-buttons">
                    <CartButtons />
                </div>
            </div>
        </nav>
    )
}
export default Navbar