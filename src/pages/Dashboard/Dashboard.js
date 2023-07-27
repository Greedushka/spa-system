import React from 'react';
import Aside from "../../components/aside/aside";
import style from "./style.css"
import order1 from '../../imgs/pirog.jpg'
import merch1 from '../../imgs/merch1.jpg'
import merch2 from '../../imgs/merch2.jpg'
import merch3 from '../../imgs/merch3.jpg'
import Shop from '../Shop/Shop'
import {NavLink} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className='section'>
            <Aside />
            <div className="wrapper">
                <div className="main-title">Dashboard</div>
                <div className="main">
                    <div className="left-side">
                            <div className="activity-cards">
                                <div className="activity-card">
                                    <ion-icon name="game-controller-outline" className='activity-icon'></ion-icon>
                                    <span className="activity-title">Непройденные игры</span>
                                    <span className="activity-suptitle">138</span>
                                </div>
                                <div className="activity-card">
                                    <ion-icon name="game-controller-outline" className='activity-icon'></ion-icon>
                                    <span className="activity-title">Непройденные игры</span>
                                    <span className="activity-suptitle">138</span>
                                </div>
                                <div className="activity-card">
                                    <ion-icon name="game-controller-outline"></ion-icon>
                                    <span className="activity-title">Непройденные игры</span>
                                    <span className="activity-suptitle">138</span>
                                </div>
                                <div className="activity-card">
                                    <ion-icon name="game-controller-outline"></ion-icon>
                                    <span className="activity-title">Непройденные игры</span>
                                    <span className="activity-suptitle">138</span>
                                </div>
                            </div>
                            <div className="merch">
                                    <div className="merch-card">
                                        <div className="card-imgs">
                                            <img src={merch1} alt="" id='merch1'/>
                                            <img src={merch2} alt="" id='merch2'/>
                                            <img src={merch3} alt="" id='merch3'/>
                                        </div>
                                        <div className="wannabuyit">
                                            <span>&#32;</span>
                                            <NavLink to='/shop'><span id='buy'>Купить</span></NavLink>
                                        </div>
                                    </div>
                            </div>
                    </div>
                    <div className="right-side">
                            <div className="orders">
                                <div className="orders-title">
                                    <span>Заказы</span>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="orders-body">
                                    <div className="body-items">
                                        <div className="body-item">
                                            <div className="body-item-img">
                                                <img src={order1} />
                                            </div>
                                        <div className="body-item-desc">
                                            <span className='desc-title'>Пирог. Вкусный</span>
                                            <span className="desc">Очень вкусный пирог</span>
                                            <span className="time-add">21.07.23</span>
                                        </div>
                                        </div>
                                        <div className="body-item new">
                                            <div className="body-item-img">
                                                <img src={order1} />
                                            </div>
                                        <div className="body-item-desc">
                                            <span className='desc-title'>Пирог. Вкусный</span>
                                            <span className="desc">Очень вкусный пирог</span>
                                            <span className="time-add">21.07.23</span>
                                        </div>
                                        </div>
                                        <div className="body-item new">
                                            <div className="body-item-img">
                                                <img src={order1} />
                                            </div>
                                        <div className="body-item-desc">
                                            <span className='desc-title'>Пирог. Вкусный</span>
                                            <span className="desc">Очень вкусный пирог</span>
                                            <span className="time-add">21.07.23</span>
                                        </div>
                                        </div>
                                        <div className="body-item">
                                            <div className="body-item-img">
                                                <img src={order1} />
                                            </div>
                                            <div className="body-item-desc">
                                                <span className='desc-title'>Пирог. Вкусный</span>
                                                <span className="desc">Очень вкусный пирог</span>
                                                <span className="time-add">21.07.23</span>
                                            </div>
                                        </div>
                                        <div className="body-item new">
                                            <div className="body-item-img">
                                                <img src={order1} />
                                            </div>
                                            <div className="body-item-desc">
                                                <span className='desc-title'>Пирог. Вкусный</span>
                                                <span className="desc">Очень вкусный пирог</span>
                                                <span className="time-add">21.07.23</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;