import React from 'react';
import Aside from "../../components/aside/aside";

const Home = () => {
    let now = new Date(),
        hour = now.getHours(),
        day = now.getDay(),
        message = '';
    if (hour <= 6) {
        message = 'Доброй ночи';
    } else if (hour <= 12) {
        message = 'Доброе утро';
    } else if (hour <= 18) {
        message = 'Добрый день';
    } else {
        message = 'Добрый вечер';
    }
    let daytitle = ["воскресенье","понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]

    return (
        <div className='section'>
            <Aside />
            <div className="wrapper">
                <div className="main-title">Главная</div>
                <div className="main">
                    {message} <br/> Сегодня {daytitle[day]}
                </div>
            </div>
        </div>
    );
};

export default Home;