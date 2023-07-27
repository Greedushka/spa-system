import React from 'react';
import Aside from "../../components/aside/aside";
import merch1 from "../../imgs/merch1.jpg";
import merch2 from "../../imgs/merch2.jpg";
import merch3 from "../../imgs/merch3.jpg";
import style from './style.css'
import {NavLink} from "react-router-dom";

const Shop = () => {
    return (
        <div className='section'>
            <Aside />
            <div className="wrapper">
                <div className="main-title">Магазин мерча</div>
                <div className="main">
                    <div className="shop-cards">
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>
                        <NavLink className="shop-card">
                            <img src={merch1} alt="" id='merch1'/>
                            <span>Футболка ХХXXL</span>
                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;