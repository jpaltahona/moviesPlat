import React, {useEffect, useState} from 'react';
import '../assets/styles/app.scss';

import Header from '../components/header';
import Search from '../components/Search'
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselIten from '../components/CorouselIten';
import Footer from '../components/Footer';


const API = 'http://localhost:3000/initalState';

const App = () => {
    
    const [videos, setVideos]  = useState([]);
    const [count, setCount] = useState(0);

    useEffect(
        ()=> {
            fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
        },
        []);
 
console.log(videos.trends);


    return (
        <div className="App">
            <Header />
            <Search />
                <Categories title="Recomendados para ti">
                    <Carousel>
                        <CarouselIten />
                        <CarouselIten />
                    </Carousel>
                </Categories>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)} className="btn">
                    Click me
                </button>
            </div>
  
                <Categories title="Hechos por mi">
                <Carousel>
                      
                </Carousel>
            </Categories>
            
            
            
            
            <Footer/>
        </div>
    );
}

export default App;
