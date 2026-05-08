import Header from "../Header"
import { Link} from "react-router"
import "./index.css"

const Home = () => {
    
    return (
        <div className="bg-container">
            <Header />
            <div className="main_div">
                <div className="text_btn_div">
                    <h1 className="head">Clothes That Get YOU Noticed</h1>
                    <p className="paragraph">
                        Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.
                    </p>
                    <Link className="btn_div" to = "/product">
                        <button className="Shop_btn">Shop Now</button>
                    </Link>
                </div>

                <img 
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                    className="boy_img"
                    alt="dress_img"
                />
            </div>

        </div>
    )
}

export default Home