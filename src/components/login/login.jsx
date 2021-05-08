import React from 'react'
import "./login.css"
import brand from "../assets/favicon3.png";

const Login = (props) => {


    let [allData, setAllData] = React.useState()


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
        props.loginActionThunk(allData)


    }




    return (
        <div className="login">
            <form onSubmit={submitHandler} className="form">
                <div className="forimg" style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                    <img style={{ width: "50px", textAlign: "center", display: "table" }} src={brand} alt="brand" />
                </div>

                <h1 >NeoFinance</h1>
                <input type="text" id="email" name="email" autoComplete="off" required onChange={emailInput} />
                <label htmlFor="email" className="labelEmail">
                    <span className="contentEmail">Логин: admin</span></label>
                <input type="password" name="password" id="pass" required onChange={passwordInput} />
                <label htmlFor="pass" className="labelPass">
                    <span className="contentPass">Пароль: admin</span></label>
                <button className="btn">
                    <span>Войти</span></button>
            </form>
        </div>
    )
}

export default Login
