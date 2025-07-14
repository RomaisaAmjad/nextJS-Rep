import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    <div>
         <h1 className="text-2xl text-center font-bold">Welcome to the About Page</h1> 
         <Image  className='mx-auto' src="https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Image" width={200} height={200} />
    </div>
  )
}
export const metadata = {
  title: "BookishBundle About",
  description: "BookishBundle App using Next.js",
};

