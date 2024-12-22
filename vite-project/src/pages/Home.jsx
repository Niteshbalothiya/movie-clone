import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 export const Home = () => {
const [popularMovies,setPopularMovies] = useState([])

  useEffect (() =>{
fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ef4796325751371ba5c0bfce84429c0")
  .then(res => res.json())
   .then(data => setPopularMovies(data.result)
   )
 })
  return (
    <div>
 <div className='poster'>
  <Carousel
  showThumbs={false}
  autoPlay ={true}
  transitionTime={2}
  infiniteLoop= {true}
  showStatus ={true}>
 
  </Carousel>
 </div>
    </div>
  )
}
export default Home;

