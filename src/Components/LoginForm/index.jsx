
import {useState} from 'react'
import { useNavigate , Navigate} from 'react-router'
import  Cookies  from 'js-cookie'
import './index.css'

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSubmitError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitSuccess = (JWT_TOKEN) => {
    Cookies.set('JWT_TOKEN', JWT_TOKEN, {expires: 30})
    navigate("/", {replace : true})
  }

  const onSubmitFaliure =(error_msg) => {
    setShowError(true)
    setErrorMsg(error_msg)
  }


  const submitForm = async(event) => {
    event.preventDefault()
    const userDetails = {username,password}
    const url = "https://apis.ccbp.in/login"
    const option = {
        method : 'POST',
        body : JSON.stringify(userDetails)
    }

    const response = await fetch(url, option)
    
    const data = await response.json()
    console.log(data)
    if(response.ok === true){
        onSubmitSuccess(data.jwt_token)
    }
    else{
      onSubmitFaliure(data.error_msg)
    }
   
  }

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
    </>
  )

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-field"
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
    </>
  )
  const jwt_token = Cookies.get('JWT_TOKEN')
  if(jwt_token != undefined){
    <Navigate to = "/"/>
  }
  return (
    <div className="login-form-container">
      <img
        src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/nxt-trendz-logo.png"
        className="login-website-logo-mobile-img"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-img"
        alt="website login"
      />
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/nxt-trendz-logo.png"
          className="login-website-logo-desktop-img"
          alt="website logo"
        />
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        {showSubmitError && <p className='error-message'>*{errorMsg}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
