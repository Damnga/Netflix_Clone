import React,{useEffect, useRef,useState} from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'
const TitleCard = ({title,category}) => {
  const [apiData,setApiData] = useState([]);
  const cardRef = useRef(null);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmQxYTM2Yzk1NDFhNTYzOGI4MWM2Mzg3MjFjODM0OSIsIm5iZiI6MTc0MjAzMDQ3Ny42NzgwMDAyLCJzdWIiOiI2N2Q1NDY4ZDMxNTM4ZGU2MDhmMTYwY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OKY2A26QMl5BEJcHQEJ-gm09MP1rC9NCq9pvx6MAL1g'
    }
  };
  
  const handleWheel = (e) => {
    e.preventDefault();
    if (cardRef.current) {
      cardRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener('wheel', handleWheel);
      return () => {
        cardElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);
  return (
    <div className='titleCard'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className="card_list" ref={cardRef}>
        {apiData.map((card,index)=>{
          return <Link to ={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
            
        })}
      </div>
    </div>
  )
}

export default TitleCard
