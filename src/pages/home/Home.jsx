import React from 'react'
import './home.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function Home() {
  return(
    <div className='home_page'>
        <Header></Header>
        <div className='home_page_body'>
          <div className='body_content'>
            {/* <Outlet></Outlet> */}
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
