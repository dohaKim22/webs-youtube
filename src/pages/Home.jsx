import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Music from '../components/contents/Music'

import VideoSlider from '../components/video/VideoSlider'

import { movieText } from '../data/movie'
import { BookText } from '../data/book'
import { AnimeText } from '../data/anime'
import { musicText } from '../data/music'
import { todayText } from '../data/Today'
import { PointText } from '../data/point'

const Home = () => {
  return (
    <Main title="유튜브 채널" description ="유튜브 채널 페이지입니다.">
          <Today videos={todayText} id='today'/>
          <Music videos={musicText} title='😋추천 영화를 소개합니다.' id='music'/>
          <VideoSlider videos={movieText} title='😋추천 영화를 소개합니다' id='movie'/>
          <VideoSlider videos={BookText} title='😋추천 도서를 소개합니다' id='book'/>
          <VideoSlider videos={AnimeText} title='😋추천 애니를 소개합니다' id='anime'/>
          <VideoSlider videos={PointText} title='😍즐겨찾기 입니다.' id='point'/>
          {/* <VideoSlider id='book'/>
          <VideoSlide id='anime'r/> */}
          {/* <Movie/>
          <Book/>
          <Anime/> */}
          {/* <Portfolio/>
          <Youtube/> */}

    </Main>
  )
}

export default Home