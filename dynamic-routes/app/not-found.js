import React from 'react'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='text-center'>
      <h1 className='text-red-500 text-4xl font-mono'>404 - Not Found</h1>
      <p className='text-gray-600'>The page you are looking for does not exist.</p>
      <Link href="/" className='text-blue-500 '> Return to home</Link>
    </div>
  )
}
