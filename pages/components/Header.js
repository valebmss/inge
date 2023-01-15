import React from 'react'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import trayectoria from '../trayectoria'

function Header() {
  return (
    <div>
      <div className='bg-gray-800 text-white flex justify-around'>
        <p className='text-xs sm:text-lg'>+57 3152711731</p>
        <p className='text-xs sm:text-lg'>bemusingenieriasas@gmail.com</p>
      </div>
      <nav className='w-11/12 md:w-3/4 text-center m-auto'>
        <ul className='flex '>
            <Link href="/" className='boton flex-1'><li className='1 text-xs sm:text-lg '>Villa Paula</li></Link>
            <Link href="../trayectoria" className='boton flex-1 '><li className='text-xs sm:text-lg'>Trayectoría</li></Link>
            <Link href="../contacto" className='boton flex-1'><li className=' text-xs sm:text-lg'>Contacto</li></Link>
        </ul>

      </nav>
        
    </div>
  )
}

export default Header