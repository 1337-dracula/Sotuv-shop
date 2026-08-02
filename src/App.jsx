import { useState, useEffect } from 'react'
import './App.css'

export default function App() {

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);

      } catch (err) {

      }
    }

    fetchUsers()
  }, [])
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>

}

