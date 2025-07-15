"use client";
import {submitAction} from "@/actions/form";
import {useRef} from "react";

export default function Home() {
  const Ref = useRef();

  return (
    <div className="text-center bg-blue-800 p-3 w-2/3 mx-auto my-14">
      <form ref={Ref} action ={(e)=>{submitAction(e);Ref.current.reset();}}>
        <div >
          <label className="mx-3" htmlFor="name">name</label>
          <input className="text-black" type="text" id="name" name="name" />
        </div>
        <div>
          <label className="mx-3" htmlFor="address">Address</label>
          <input className="text-black" type="text" id="address" name="address" />
        </div>
        <button className="bg-gray-400 text-white p-1 px-2 m-2 rounded-lg">SUBMIT</button>
      </form>
    </div>
    
  );
}
