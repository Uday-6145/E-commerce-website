import "./index.css"

const ProductCart = (props) => {
    const {productData} = props;
    const {brand, id, image_url, price, rating, title} = productData

    return(
        <li className="product_item_div">
            <div className="img_div">
                <img src={image_url} className="img"/>
            </div>
            <div className="product-detail">
                <p>{title}</p>
                <p>{brand}</p>
                <div className="price-rating">
                    <p>{price}</p>
                    <p>{rating}</p>
                </div>

            </div>
        </li>
    )
}

export default ProductCart