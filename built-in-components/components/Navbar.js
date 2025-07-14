import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between px-4 bg-blue-900 p-2 font-semibold">
        <div>
           <h1>Bookish Bundle</h1>
        </div>
        <div>   
            <ul className='flex flex-row gap-3 hover:cursor-pointer'>
                <li className='hover:cursor-pointer'><Link href="/">Home</Link></li>
                <li className='hover:cursor-pointer'><Link href="/About">About</Link></li>
                <li className='hover:cursor-pointer'><Link href="/Contact">Contact</Link></li>
            </ul>
        </div>
       
    </div>
  )
}
