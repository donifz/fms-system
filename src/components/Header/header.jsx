import React, { useState } from 'react';
import Sidebar from '../Sidebar/sidebar';
import "./header.css"
import "../Sidebar/sidebar.css"
import adminPhoto from "../assets/Sanira.jpg"
import { Link } from "react-router-dom"
import settingIcon from "../assets/icons/settings.png"
import Avatar from '@material-ui/core/Avatar';


const Header = (props) => {
    let [burger, setBurger] = useState(false)
    let Burg = 'sidebar'
    let header = 'header'
    const burgerToggle = () => {
        setBurger(!burger)
    }
    if (burger === true) {
        Burg += ' sidebarShow'
        header += ' forHeader'
    }

    console.log(props.bankList)
    return (<>
        <header className={header}>
            <div className="header-wrapper">

                <div className="header__search">
                    <div className='burger' onClick={burgerToggle}><span></span></div>
                    <div className="header__btns">
                        <button onClick={props.modalIncome} className="btn income__btn--green">Доход</button>
                        <button onClick={props.modalExpenses} className="btn income__btn--red">Расход</button>
                        <button onClick={props.modalTransfer} className="btn income__btn--yellow">Перевод</button>
                    </div>
                </div>

                <div className="bell"><Link to={'/settings'}> <span>Настройки</span> <img src={settingIcon} alt="icon setting" /></Link> </div>

            </div>

        </header>
        <aside className={Burg}>
            <div className="sidebar-wrapper">
                <div className="brand-name"><Link to={'/'}><h2 className="brand">FMS</h2></Link></div>
                <div className="nav-wrapper">
                    <div className="admin">
                        <div className="admin__icon"><Avatar src="/broken-image.jpg" /></div>
                        <div className="admin__text">
                            <p className="admin__name">{props.getMe.first_name+" "+props.getMe.last_name}</p>
                            <p className="admin__mail">{props.getMe.email}</p>
                        </div>
                    </div>
                    <nav>
                        <ul className="nav__menu">
                            <li className="menu__list"><h2>Баланс</h2> </li>
                            {props.bankList.map(item => {
                                return (
                                    <li key={item.id} className="menu__list"><span>{item.name_bank}</span><span>{item.balance} сом</span></li>
                                )
                            })}
                        </ul>
                    </nav>
                    <nav className="main-nav">
                        <ul className="sidebar__nav">
                            <li className="sidebar__nav-list"><Link to={"/diagrams"}><h3>Аналитика</h3></Link></li>
                            <li className="sidebar__nav-list"><Link to={"/profile"}><h3>Профиль</h3></Link></li>
                            <li className="sidebar__nav-list"><Link to={"/archive"}><h3>Архив</h3></Link></li>
                            <li className="sidebar__nav-list" style={{cursor:"pointer"}} onClick={()=>props.logout()}><h3>Выход</h3></li>

                        </ul>
                    </nav>
                </div>


            </div>

        </aside>

    </>
    )
}
export default Header