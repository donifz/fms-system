import React from 'react';
import "./sidebar.css"
import adminPhoto from "../assets/admin.png"
import tasks from "../assets/icons/tasks.svg"

const Sidebar = (props)=>{


    
return(
    <aside className="sidebar ">
        <div className="sidebar-wrapper">
            <div className="brand-name"><h2>FMS</h2></div>
            <div className="nav-wrapper">
            <div className="admin">
                <div className="admin__icon"><img src={adminPhoto} alt="admin photo"/></div>
                <div className="admin__text">
                    <p className="admin__name">Sierra Ferguson</p>
                    <p className="admin__mail">s.ferguson@gmail.com</p>
                </div>
                </div>
                <nav>
                    <ul className="nav__menu">
                        <li className="menu__list"><span>Банк.Счет</span><span>3255</span></li>
                        <li className="menu__list"><span><img src={tasks} alt=""/></span>Сотрудники</li>
                        <li className="menu__list"><span><img src={tasks} alt=""/></span>Настройки</li>
                    </ul>
                </nav>
            </div>
            
            
        </div>
        
    </aside>
)
}
export default Sidebar