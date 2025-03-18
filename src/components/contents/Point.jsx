import React from "react";

import { PointText } from "../../data/point";
import { Link } from "react-router-dom";

const Point = () =>{
    return(
        <section id = "point">
            <h2>😀즐겨찾기 페이지</h2>
            <div className="video__inner">
                {PointText.map((point, key)=>(
                    <div className="point" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={'/video/$(video.videoId'}>
                            <img src={point.img} alt={point.img}></img>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Point