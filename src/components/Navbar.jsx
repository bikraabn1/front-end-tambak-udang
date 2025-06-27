import React from 'react'
import { Burger } from '@mantine/core'

const Navbar = ({isOpen, toggle}) => {
  return (
    <div className='flex justify-between h-full items-center px-7'>
        <div className='flex gap-2'>
            <Burger lineSize={2} size="sm" opened={isOpen} onClick={toggle} aria-label="Toggle navigation"/>
        </div>
        <h3 className='text-sm lg:text-2xl font-semibold text-white'>Tambak Udang</h3>
    </div>
  )
}

export default Navbar
