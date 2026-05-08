import Header from "../Header"
import "./index.css"
const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="not_found_main_div">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
                    alt="not-found"
                    className="not-found-img"
                />
            </div>
        </div>
    )
}

export default NotFound