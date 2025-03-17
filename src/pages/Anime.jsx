import React from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { AnimeText } from '../data/anime'

const Anime = () => {
  return (
    <Main title="애니메이션 채널" 
          description="애니메이션 페이지입니다.">
      
      <section id='animePage'>
      <h2>😀추천 애니 페이지</h2>
      <div className='video__inner'>
        <VideoCard videos={AnimeText}/>
      </div>
      </section>
    </Main>
  )
}

export default Anime