import React from 'react'
import "./login.css"
import brand from "../assets/favicon3.png";
import loader from "../loader/assets/loader.svg";
import Loader from '../loader/loader';

const Login = (props) => {


    let [allData, setAllData] = React.useState()

    let [loaderState, setLoaderState] = React.useState(false)
    const emailInput = (e) => {
        setAllData({ ...allData, [e.target.name]: e.target.value })
        console.log(e.target.value)

    }
    const passwordInput = (e) => {
        setAllData({ ...allData, [e.target.name]: e.target.value })
        console.log(e.target.value)

    }
    const submitHandler = (e) => {

        e.preventDefault()

        setLoaderState(true)
        props.loginActionThunk(allData)



    }




    return (
        <div className="login">
            <form onSubmit={submitHandler} className="form">
                <div className="forimg" style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                    <img style={{ width: "50px", textAlign: "center", display: "table" }} src={brand} alt="brand" />
                </div>

                <h1 >NeoFinance</h1>
                {loaderState && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}><img src={loader} alt="" /></div>}
                <input type="text" id="email" name="email" autoComplete="off" required onChange={emailInput} />
                <label htmlFor="email" className="labelEmail">
                    <span className="contentEmail">Логин: admin</span></label>
                <input type="password" name="password" id="pass" required onChange={passwordInput} />
                <label htmlFor="pass" className="labelPass">
                    <span className="contentPass">Пароль: admin</span></label>
                <button className="btn">
                    <span >Войти</span></button>
            </form>
        </div>
    )
}

export default Login
