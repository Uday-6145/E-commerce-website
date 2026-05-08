import { Link, useNavigate} from "react-router"
import "./index.css"
import Cookies from 'js-cookie'
const Header = () => {
    const navigate = useNavigate();
    const onClickLogout = () =>{
        Cookies.remove('JWT_TOKEN')
        navigate('/login', {replace: true})
    }
    return (
        <nav className="nav-header">
            <div className="nav-bar-large-container">
                <Link to= "/">
                    <img 
                        src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/nxt-trendz-logo.png"
                        className="website-logo"
                        alt="website logo"
                    />
                </Link>
                <div className="nav_item_plus_btn">
                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <Link to = "/" className="nav-link">
                                Home
                            </Link>
                        </li>


                        <li className="nav-menu-item">
                            <Link to = "/product" className="nav-link">
                                Product
                            </Link>
                        </li>

                        <li className="nav-menu-item">
                            <Link to = "/cart" className="nav-link">
                                Cart
                            </Link>
                        </li>
                    </ul>

                    <button className="log_out_btn" onClick={onClickLogout}>
                        Logout
                    </button>
                </div>
                
            </div>
        </nav>
    )
}

export default Header
