import React from 'react';
import style from './style.css'
import profilePhoto from '../../imgs/profile-photo.jpg'
import {NavLink} from "react-router-dom";

const Header = () => {
    window.onload = () => {
        let iter = 0;
        const shopItem = document.querySelectorAll('.shop-card')
        shopItem.forEach(item => {
            item.onclick = () => {
                document.querySelector('.count').style.display = 'inline'
                iter++;
                document.querySelector('.count').textContent = iter
                const divNote = document.createElement('div')
                divNote.className = 'note-item'
                divNote.innerHTML = '<span>Вы успешно заказали футболку!</span><span class="remove-note">x</span>'
                document.querySelector('.note-window').appendChild(divNote)
                document.querySelectorAll('.remove-note').forEach(e => {
                    e.onclick = () => {
                        e.parentElement.remove()
                        iter--
                        if(iter < 1)
                        {
                            document.querySelector('.count').style.display = 'none'
                        }
                        document.querySelector('.count').textContent = iter
                    }
                })
            }
        })
        const notifications = document.querySelector('.notifications')
        let showNotes = false;
        notifications.onclick = (e) => {
        if(!showNotes) {
            document.querySelector('.note-window').style.display = 'block'
            setTimeout(() => {document.querySelector('.note-window').style.opacity = '1' }, 100)
            showNotes = true;
        } else{
            document.querySelector('.note-window').style.opacity = '0'
            setTimeout(() => {document.querySelector('.note-window').style.display = 'none'}, 100)
            showNotes = false;
        }
        }
    }
    return (
        <div>
            <nav className='header_nav'>
                <div className="container">
                    <div className="header-row">
                        <div className="header_left">
                            <input type="text" className='header_searchfield' placeholder='Поиск...'/>
                        </div>
                        <div className="header_middle">
                            <NavLink to="/" className="logo">
                                <strong>Daniel's</strong> system
                            </NavLink>
                        </div>
                        <div className="header_right">
                            <div className="notifications">
                                <ion-icon name="notifications-outline"></ion-icon>
                                <span className="count">0</span>
                            </div>
                            <div className="note-window">

                            </div>
                            <div className="profile">
                                <span className="name">Daniel</span>
                                <img src={profilePhoto} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;