import "./index.css"
import Header from "../Header"

const Cart = () => {
    
    return (
        <div>
            <Header/>
            <div className="Main_div_cart">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
                    alt="cart"
                    className="cart-img"
                />
            </div>
        </div>
    )
} 

export default Cart