import { Navigate } from "react-router"
import Cookies from "js-cookie"


const ProtectedRoute = ({children}) => {
    const jwt_token = Cookies.get('JWT_TOKEN')
    if(jwt_token === undefined){
        return <Navigate to = "/login" replace/>
    }
    return children
}

export default ProtectedRoute