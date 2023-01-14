import React from 'react'
import Link from 'next/link'
import styles from '/styles/Home.module.css'


function Header() {
  return (
    <div>
      <div className='bg-gray-800 text-white flex justify-around'>
        <p className='text-xs sm:text-lg'>+57 3152711731</p>
        <p className='text-xs sm:text-lg'>bemusingenieriasas@gmail.com</p>
      </div>
      <nav>
        <ul className='flex justify-around'>
            <li className='boton flex-1 text-xs sm:text-lg '><Link href="/"><spam className="t-boton">Inicio</spam></Link></li>
            <li className='boton flex-1 text-xs sm:text-lg'><Link href="/">Trayectoria</Link></li>
            <li className='boton flex-1 text-xs sm:text-lg'><Link href="/">Contacto</Link></li>
        </ul>

      </nav>
        
    </div>
  )
}

export default Header