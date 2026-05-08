import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import ProductCart from "../ProductCart"
import "./index.css"
import BeatLoader from "react-spinners/BeatLoader"

const PrimeDealSection = () => {

    const apiStatusConstants = {
        initial: 'INITIAL',
        inProgress: 'IN_PROGRESS',
        success: 'SUCCESS',
        failure: 'FAILURE',
    }
    
    const[apiResponse, setApiresponse] = useState({
        status: apiStatusConstants.initial,
        data: null,
        errorMsg: null,
    })

    useEffect(()=>{
        const getPrimedeals= async() =>{
            setApiresponse((prevResponse)=>({
                ...prevResponse,
                status: apiStatusConstants.inProgress,
            }))
            const apiUrl = "https://apis.ccbp.in/prime-deals"
            const jwt_token = Cookies.get('JWT_TOKEN')

            const options = {
                headers: {
                    Authorization: `Bearer ${jwt_token}`,
                },
                method: 'GET',
            }
            const response = await fetch(apiUrl, options)

            if (response.ok == true){
                const fetchedData = await response.json()
                const formattedData = fetchedData.prime_deals.map((product)=>({
                    brand: product.brand,
                    id: product.id,
                    image_url: product.image_url,
                    price: product.price,
                    rating: product.rating,
                    title: product.title
                }))

                
                setApiresponse((prevResponse)=>({
                    ...prevResponse,
                    status: apiStatusConstants.success,
                    data: formattedData,
                }))
                
            }
            else{
                setApiresponse((prevResponse)=>({
                    ...prevResponse,
                    status: apiStatusConstants.failure,
                }))
            }
            
        }

        getPrimedeals()
    }, [])

    const renderLoadingView = () => {
        return(
            <div className="Loading-container">
                <BeatLoader color = '#7032a5'/>
            </div>
        )
    }



    const renderPrimeDealList = () =>{
        const {data} = apiResponse
        return(
            <div className="Prime-deal-main_div">
                <h1 className = "primedeals-list-heading">Exclusive Prime Deals</h1>
                <ul className = "primedeals-list">
                    {data.map((product)=>(
                        <ProductCart productData = {product} key = {product.id}/>
                    ))}
                </ul>
            </div>
        )
    }

    const renderPrimeDealFailureView = () =>{
        return(
            <img 
                src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png" 
                alt="Exclusive Dealas Banner"
                className="register-prime-image"
            />
        )
    }

    const renderPrimeDeals = () => {
        const {status} = apiResponse
        switch(status){
            case apiStatusConstants.success:
                return renderPrimeDealList();
            case apiStatusConstants.failure:
                return renderPrimeDealFailureView();
            case apiStatusConstants.inProgress:
                return renderLoadingView()
            default:
                return null
        }
    }
    return<>{renderPrimeDeals()}</>
}

export default PrimeDealSection