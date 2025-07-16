"use client";
import {useEffect,useState} from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const result = await response.json();
      setData(result);
      
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map(user => (
          
        
          <ul key ={user.id}>
            <li>ID: {user.id}</li>
            <li>Name: {user.username}</li>
            <li>password: {user.password}</li>
          </ul>
          
        ))}
      </ul>
    </div>
  );
}
