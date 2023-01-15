import React from 'react'
import Image from 'next/image';
import a1 from '/public/1.jpeg';
import a2 from '/public/2.jpeg';
import a3 from '/public/3.jpeg';
import a4 from '/public/4.jpeg';
import a5 from '/public/5.jpeg';
import a6 from '/public/6.jpeg';
import a from '/public/7.jpeg';
import vp from '/public/vp.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Banner() {
  return (
    <div>
      <div className='md:flex'>
        <div className='w-auto mt-10 md:w-2/3 ml-5 mr-5 rounded-3xl'>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}>
            <div>
              <Image src={a} alt="" width="" height="" loading='lazy' className='rounded-3xl'/>
              <p className='legend'>Imagen de prueba 1</p>
            </div>
            <div>
              <Image src={a1} alt="" width="" height="" loading='lazy' className='rounded-3xl'/>
              <p className='legend'>Imagen de prueba 1</p>
            </div>
            <div>
              <Image src={a2} alt="" width="" height="" loading='lazy' className='rounded-3xl'/>
              <p className='legend'>Imagen de prueba 1</p>
            </div>
            <div>
              <Image src={a3} alt="" width="" height="" loading='lazy' className='rounded-3xl'/>
              <p className='legend'>Imagen de prueba 1</p>
            </div>
            <div>
              <Image src={a4} alt="" width="" height="" loading='lazy' className='rounded-3xl'/>
              <p className='legend'>Imagen de prueba 1</p>
            </div>
            <div>
              <Image src={a5} alt="" width="" height="" loading='lazy' className='rounded-3xl'/>
              <p className='legend'>Imagen de prueba 1</p>
            </div>
            <div>
              <Image src={a6} alt="" width="" height="" loading='lazy' className='rounded-3xl'/>
              <p className='legend'>Imagen de prueba 1</p>
            </div>
          </Carousel>
        </div>
        <div className='flex md:flex-wrap'>
          <div className='text-left md:mt-10 p-3 w-1/4 md:w-full md:flex'>
            <h1 className='md:w-1/2 text-m md:text-3xl'>Villa Paula <br/><span className='spam text-lg md:text-4xl'>Tocancipá</span></h1>
            <Image src={vp} alt="Lgo VP" className='h-10 w-auto p-1 md:h-20'/>
          </div>
          <div className='p-5 flex-grow text-center text-xs w-3/4  md:text-lg'>
            <ol className=''>
              <li className='inline-flex w-1/2 '>
                <img src='https://us.123rf.com/450wm/kotofonya/kotofonya2205/kotofonya220500102/186742006-square-meter-icon-m2-sign-flat-area-in-square-metres-measuring-land-area-icon-place-dimension-pictog.jpg?ver=6' alt='' className='w-6 md:w-14'/>
                <p className='p-2 spam '>114 m2 construidos</p>
              </li>
              <li className='inline-flex  w-1/2'>
                <img src='https://cdn-icons-png.flaticon.com/512/4848/4848570.png' alt='' className='w-6 md:w-14'/>
                <p className='p-2 spam'>3 habitaciones</p>
              </li>
              <li className='inline-flex  w-1/2'>
                <img src='https://i.pinimg.com/originals/92/55/e4/9255e4e77d199fa20510fa3effd5ce75.png' alt='' className='w-6 md:w-14'/>
                <p className='p-2 spam'>Zona verde </p>
              </li>
              <li className='inline-flex  w-1/2'>
                <img src='https://cdn-icons-png.flaticon.com/512/126/126169.png' alt='' className='w-6 md:w-14'/>
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