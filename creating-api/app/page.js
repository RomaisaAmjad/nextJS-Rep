
"use client";
export default function Home() {
  const handleClick = async() => {
    let data ={
      name: "Romaisa Amjad",
      role :"Student"
    }
    const url = await fetch("/api",
      {method: "POST", headers: {"Content-Type": "application/json"},

      body: JSON.stringify(data),
    });
      const response = await url.json();
      console.log(response);
  }
  return (
   <>
   <div className="flex flex-col items-center justify-center bg-gray-900">
   <h1>Welcome to the Home Page</h1>
   <div className="flex flex-col items-center justify-cente text-white p-4">
      <h1 className="text-xl font-bold">Next.js API POST route demo</h1>
      <button  onClick={handleClick}>Click me!</button>
   </div>
   </div>
   </>
  );
}
