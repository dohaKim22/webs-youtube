import React from 'react'
import Main from '../components/section/Main'

import { BookText } from '../data/book'
import VideoCard from '../components/video/VideoCard'

const Book = () => {
  return (
    <Main title="도서사이트" 
          description="도서사이트 페이지 입니다.">
      
      <section id='bookPage'>
      <h2>😀추천 도서 페이지</h2>
      <div className='video__inner'>
        <VideoCard videos={BookText}/>
      </div>
      </section>
    </Main>
  )
}

export default Book