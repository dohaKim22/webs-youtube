import React from 'react'


import { AnimeText } from '../../data/anime'
import { Link } from 'react-router-dom'

const Anime = () => {
  return (
     <section id='anime'>
      <h2>🧶추천 애니를 소개합니다.</h2>
      <div className='video__inner'>
        {AnimeText.map((anime, key)=>(
          <div className='anime' key={key}>
            <div className='video__thumb play__icon'>
              <Link to={'/video/$(video.videoId'}>
              <img src={anime.img} alt={anime.img}></img>
              </Link>
            </div>
            </div>
        ))}

      </div>
     </section>
  )
}

export default Anime