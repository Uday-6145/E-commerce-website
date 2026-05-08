import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import ProductCart from "../ProductCart";
import "./index.css"
import BeatLoader from "react-spinners/BeatLoader";
import ProductHeader from "../ProductHeader";
const sortbyOptions = [
    {
        optionId: 'PRICE_HIGH',
        displaytext: 'Price (High-Low)'
    },
    {
        optionId: 'PRICE_LOW',
        displaytext: 'Price (Low-High)'
    }

]
const  AllProductsSection = () => {
    const apiResponseConstant = {
        initial: 'INITIAL',
        success: 'SUCCESS',
        inprogress: 'IN_PROGRESS',
    }
    const[apiResponse, setApiResponse] = useState({
        status: apiResponseConstant.initial,
        data: null,
        errorMsg: null,
    })
    const [activeOptionId, setActiveOptionId] = useState(
        sortbyOptions[0].optionId
    )
    const updatedActiveOptionId = (activeOptionId) => {
        setActiveOptionId(activeOptionId)
    }
    

    useEffect(()=> {
        const getProducts = async() => {
            setApiResponse((prevResponse)=>({
                ...prevResponse,
                status: apiResponseConstant.inprogress,
            }))
            const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
            const jwt_token = Cookies.get('JWT_TOKEN')
            const options = {
                headers:{
                    Authorization: `Bearer ${jwt_token}`,
                } ,
                method: 'GET',
            }
            const response = await fetch(apiUrl, options);
            if(response.ok == true){
                const fetchedData = await response.json()
                console.log(fetchedData)
                const formattedData = fetchedData.products.map(product => ({
                    brand: product.brand,
                    id: product.id,
                    image_url: product.image_url,
                    price: product.price,
                    rating: product.rating,
                    title: product.title

                }))

                
                setApiResponse((prevResponse)=>({
                    ...prevResponse,
                    status: apiResponseConstant.success,
                    data: formattedData
                }))
            }
        }
        getProducts()
    }, [activeOptionId])

    const renderProductList = () => {
        const {data} = apiResponse
        return (
            <div>
                <div className="product_div">
                    <ProductHeader sortbyOptions={sortbyOptions} activeOptionId={activeOptionId} updatedActiveOptionId={updatedActiveOptionId}/>
                    <ul className="products-list">
                        {data.map(product => (
                            <ProductCart productData = {product} key = {product.id}/>
                        ))}
                    </ul>
                </div>
                 
            </div>
        )
    }

    const renderLoaderView = () => {
        return(
            <div className="loader_container">
                <BeatLoader color="#494283ff"/>
            </div>
        )
    }
    const renderAllProduct = () => {
        const {status} = apiResponse;
        switch(status){
            case apiResponseConstant.success:
                return renderProductList()
            case apiResponseConstant.inprogress:
                return renderLoaderView()
        }
    }

    return <>{renderAllProduct()}</>

           
}

export default AllProductsSection