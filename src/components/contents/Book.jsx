import React from 'react'

import { BookText } from '../../data/book'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
     <section id='movie'>
          <h2>📚추천 도서를 소개합니다.</h2>
          <div className='video__inner'>
            {BookText.map((book, key)=>(
              <div className='book' key={key}>
                <div className='video__thumb play__icon'>
                  <Link to={'/video/$(video.videoId'}>
                  <img src={book.img} alt={book.img}></img>
                  </Link>
                </div>
              </div>
      ))}
          </div>
        </section>
  )
}

export default Book