import React from 'react'
import Navbar from './component/Navbar'
import Carousel from './pages/carousel'
import BestSeller from './pages/BestSeller'
import Categories from './pages/Categories'
import AllBlogs from './pages/AllBlogs'
import SecCarousel from './pages/SecCarousel'
import Footer from './pages/Footer'
import NewLaunch from './pages/NewLaunch'
import Icon from './pages/Icon'
import LifeStyle from './pages/LifeStyle'
import WatchCard from './Dashboard/WatchCard'
import WirelessEarbudes from './Dashboard/WirelessEarbudes'
import Earbudes from './Dashboard/Earbudes'
import Headphone from './Dashboard/Headphone'
import Speakers from './Dashboard/Speakers'
import Sidebar from './component/Sidebar'
import Login from './component/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return <>
        {/* <Login /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BestSeller />} />
        <Route path='/watchCard' element={<WatchCard />} />
        <Route path='/wirelessearbudes' element={<WirelessEarbudes />} />
        <Route path='/earbudes' element={<Earbudes />} />
        <Route path='/headphone' element={<Headphone />} />
        <Route path='/speakers' element={<Speakers />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App