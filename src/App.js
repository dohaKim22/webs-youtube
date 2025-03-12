import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Music from './pages/Music'
import Movie from './pages/Movie'
import Book from './pages/Book'
import Anime from './pages/Anime'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = '/' element={<home/>} />
          <Route path = '/today'  element={<Today/>} />
          <Route path = '/music'  element={<Music/>}/>
          <Route path = '/movie'  element={<Movie/>}/>
          <Route path = '/book'  element={<Book/>}/>
          <Route path = '/anime'  element={<Anime/>}/>
          <Route path = '/port'  element={<Port/>}/>
          <Route path = '/youtube'  element={<Youtube/>}/>
          <Route path = '/channel/:channelID'  element={<Channel/>}/>
          <Route path = '/vido/:videoID'  element={<Video/>}/>
          <Route path = '/search/:searchID'  element={<Search/>}/>
          <Route path = '/*'  element={<Not/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App