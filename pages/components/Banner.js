import React from 'react'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div>
        <Carousel
        autoplay
        infiniteloop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={3500}>
            <div>
                
            </div>
        </Carousel>
    </div>
  )
}

export default Banner