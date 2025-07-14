
import fs from 'fs/promises';
import Navbar from '@/components/Navbar'
export default async function Home(){
  const data = await fs.readFile('.gitignore', 'utf-8'); 
  console.log(data.toString());

  return (
    <div>
      <Navbar/>
      <h1>.gitignore contents:</h1>
      <pre>{data}</pre> 
    </div>
  );
}




//NOTE: We can add client side component into server side component
//Next js is full stack enviorment means we can use client and server side components.
// server side ----> when theres a sensitive information and connection to databse for safety we use serveside.
// client side ---------> when only tobe rendered in client side.


// "use client"
// import {useState, useEffect} from 'react'
// const [count,setCount] = useState(0);
{/* <div>
      <button onClick={()=>setCount(count + 1)}>Click Me {count}</button>
    </div> */}