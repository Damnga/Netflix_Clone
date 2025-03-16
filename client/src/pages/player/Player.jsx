import React, {useEffect,useState} from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useParams ,useNavigate} from 'react-router-dom'
const Player = () => {
  const navigate = useNavigate();
  const {id}= useParams();
  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""

  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmQxYTM2Yzk1NDFhNTYzOGI4MWM2Mzg3MjFjODM0OSIsIm5iZiI6MTc0MjAzMDQ3Ny42NzgwMDAyLCJzdWIiOiI2N2Q1NDY4ZDMxNTM4ZGU2MDhmMTYwY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OKY2A26QMl5BEJcHQEJ-gm09MP1rC9NCq9pvx6MAL1g'
    }
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  },[])


  

  return (
    <div className='player'>

      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} /> {/* quay lại 2 bước */}

      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width='90%' height='90%' title="trailer" allowFullScreen></iframe>
      <div className="player-infor">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
