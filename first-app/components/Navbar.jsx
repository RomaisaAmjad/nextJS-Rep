import React from 'react'
import Link from 'next/link';


export default function Navbar() {
  return (
    <div className="flex justify-around items-center p-2 bg-gray-800 text-white ">
      <h1>My Website</h1>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}
