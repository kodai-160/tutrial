// export default async function Home() {
//     const res = await fetch("http://localhost:3000/api/hello");
//     const text = await res.text();

//     return (
//         <div>
//             <h1>Message from Hello API</h1>
//             <p>{text}</p>
//         </div>
//     );
// }

"use client";
import { useState } from "react";

export default function PostRequestComponent() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const sendRequest = async () => {
    try {
      const res = await fetch("/api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
  
      const data = await res.json();
      setResponse(data.messeage || JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
      setResponse("Request failed");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={sendRequest}>Send</button>
      <p>Response: {response}</p>
    </div>
  )
}