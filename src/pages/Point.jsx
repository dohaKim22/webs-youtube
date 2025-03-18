import React from "react";
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import {PointText} from '../data/point'

const Point = () => {
    return(
        <Main title = "즐겨찾기 페이지"
            description="즐겨찾기 페이지 입니다.">
        
        <section id='animePage'>
       <h2>😀즐겨찾기 페이지</h2>
      <div className='video__inner'>
        <VideoCard videos={PointText}/>
      </div>
      </section>




            </Main>
    )
}
export default Point