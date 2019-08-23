import React from 'react';
import plus from '../assets/img/plus-icon.png';
import play from '../assets/img/play-icon.png';

const CarouselIten = ({children}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://www.excelsior.com.mx/media//inside-the-note/pictures/2019/03/21/dora_la_exploradora_pelicula_poster.jpg" alt="pelisulca"/>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" alt="play" src={play}/>
                <img className="carousel-item__details--img" alt="plus" src={plus}/>
            </div>
            <p className="carousel-item__details--title"> TiTulo descriptions</p>
            <p className="carousel-item__details--subtitle"> 2019 16+ 114 minutos</p>
        </div>
    </div>
);
export default CarouselIten;