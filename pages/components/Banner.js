import React from 'react'
import Image from 'next/image';
import bb1 from '/public/bb1.jpeg';
import bb2 from '/public/bb2.jpeg';
import bb3 from '/public/bb3.jpeg';
import vp from '/public/vp.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Banner() {
  return (
    <div>
      <div className='md:flex'>
        <div className='w-auto mt-10 md:w-2/3 ml-5 mr-5 rounded-3xl'>
          <Carousel 
          autoplay={true} 
          infiniteloop={true}
          showIndicators={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
          showArrows={true}
          >
            <div>
              <Image src={bb2} alt="" width="" height="" loading='lazy' className='rounded-3xl'/>
              <p className='legend'>Imagen de prueba 1</p>
            </div>
            <div>
              <Image src={bb3} alt="" width="" height="" loading='lazy' className='rounded-3xl'/>
              <p className='legend'>Imagen de prueba 1</p>
            </div>
          </Carousel>
        </div>
        <div className='flex md:flex-wrap'>
          <div className='text-left md:mt-10 p-3 w-1/4 md:w-full md:flex'>
            <h1 className='md:w-1/2 text-m md:text-3xl'>Villa Paula <br/><span className='spam text-lg md:text-4xl'>Tocancipá</span></h1>
            <Image src={vp} alt="Lgo VP" className='h-10 w-auto p-1 md:h-20'/>
          </div>
          <div className='p-5 flex-grow text-center text-xs w-3/4 ml-5 md:text-lg'>
            <ol className=''>
              <li className='inline-flex w-1/2 '>
                <img src='https://cdn-icons-png.flaticon.com/512/7374/7374076.png' alt='' className='w-8 md:w-14'/>
                <p className='p-2 spam '>114 m2 </p>
              </li>
              <li className='inline-flex  w-1/2'>
                <img src='https://cdn-icons-png.flaticon.com/512/7374/7374076.png' alt='' className='w-8 md:w-14'/>
                <p className='p-2 spam'>114 m2 </p>
              </li>
              <li className='inline-flex  w-1/2'>
                <img src='https://cdn-icons-png.flaticon.com/512/7374/7374076.png' alt='' className='w-8 md:w-14'/>
                <p className='p-2 spam'>114 m2 </p>
              </li>
              <li className='inline-flex  w-1/2'>
                <img src='https://cdn-icons-png.flaticon.com/512/7374/7374076.png' alt='' className='w-8 md:w-14'/>
                <p className='p-2 spam'>114 m2</p>
              </li>
            </ol>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Banner