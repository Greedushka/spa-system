import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.css'

const Aside = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav-row">
                    <ul className='nav-list'>
                        <li className="nav-list__item">
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                            <ion-icon name="business-outline"></ion-icon>
                                Дэшборд
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/tasks"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                <ion-icon name="create-outline"></ion-icon>
                                Задачи
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/settings"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                <ion-icon name="construct-outline"></ion-icon>
                                Настройки
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Aside;