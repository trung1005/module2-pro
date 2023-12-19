import React from 'react'
import './header.scss'

export default function Header() {
  return (

    <div className='header_content'>
      <div className='left'>
        <div onClick={() => {
          window.location.href = '/'
        }} className='logo_box'>
          <img src="https://peacebooks.vn/wp-content/uploads/2021/08/Peacebooks-1-2-Trans-1024x410.png" />
        </div>
      </div>
      <div className='right'>
      </div>
    </div>

  )
}
