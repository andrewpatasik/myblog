import React from 'react'

const Footer = () => {
  return(
    <footer className='w-full h-60 flex flex-col justify-between items-center'>
      <ul className='container flex flex-1 gap-6 justify-center items-center text-4xl text-gray-600'>
        <li><a href='#' className='sc-icon'><i className="fa-brands fa-github-alt"></i></a></li>
        <li><a href='#' className='sc-icon'><i className="fa-solid fa-envelope"></i></a></li>
        <li><a href='#' className='sc-icon'><i className="fa-brands fa-twitter"></i></a></li>
        <li><a href='#' className='sc-icon'><i className="fa-brands fa-youtube"></i></a></li>
      </ul>
      <div className='p-2'>
        <p className='font-bold tracking-wide text-gray-400'>hand-made crafted by andrew patasik</p>
      </div>
    </footer>
  )
}

export default Footer;
