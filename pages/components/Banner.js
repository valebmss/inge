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
        <div className='text-left md:mt-10 p-5'>
          <h1 className='text-m sm:text-xl md:text-2xl'>Villa Paula <br/><span className='spam font-medium md:text-3xl'>Tocancipá</span></h1>
          <Image src={vp} alt="Lgo VP" width={100}/>
        </div>   
      </div>
    </div>
  )
}

export default Banner