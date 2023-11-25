import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '.'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link
          href='/'
          className='flex justify-center items-center'
        >
          <Image
            src='/images/irs-logo.png'
            alt='logo'
            width={118}
            height={10}
            className='object-contain h-12'
          />
        </Link>

        <Button
          label='Sign In'
          type='button'
          className='text-primary-blue rounded-full bg-white min-w-[130px] hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out'
        />
      </nav>
    </header>
  )
}

export default Navbar
