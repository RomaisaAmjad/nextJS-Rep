import React from 'react'
import Script from 'next/script';

export default function page() {
  return (
    <div>
        <Script>
            {`
            alert("Welcome to the Contact Page");`}
        </Script>
        <h1 className="text-2xl font-bold">Welcome to the Contact Page</h1>    
     
    </div>
  )
}
export const metadata = {
  title: "BookishBundle Contact",
  description: "BookishBundle App using Next.js",
};
