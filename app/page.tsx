"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  // UseState Hook - data/storage
  const [data, setData] = useState<string>("")

  const fetchMyApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    // setData(JSON.stringify(data))
  }

  const fetchCustomApi = async () => {
    const response = await fetch("/api")
    const data = await response.json()

    console.log(JSON.stringify(data))
  }

  // Q. When would you want to use functions within useEffect dependency bracket []
  // Q. LiveServer with Next.js?
  // Q. How do we check when things go through 'componentDidMount'
  // Q. NODE - vad innebär det?
  // Q. Why does next.js block its own domain for CORS?
  // A. It Does NOT, it does however block when you type in localhost:3000

  // UseEffect Hook - onRender
  useEffect(() => {
    fetchMyApi()
    fetchCustomApi()
  }, [])

  return (
    <div className="flex justify-center items-center bg-blue-800 flex-col h-screen">
      <h1>Welcome To Our First Application</h1>
      <p>This app is under construction...</p>

      <Link
        href={"/student"}
        className="transition hover:text-cyan-50 hover:translate-x-1"
      >
        Navigate to Student Page
      </Link>

      <span>
        <p>Logical Arithmatic Operators</p>
        <p> 2 + 2 = {2 + 2} </p>
        <p> 2 - 2 = {2 - 2} </p>
        <p> 2 * 2 = {2 * 2} </p>
        <p> 2 / 2 = {2 / 2} </p>
        <p> 2 + 2 = {2 % 2} </p>
      </span>

      <span>
        <p>Conditional Operations</p>
        <p> 2 &gt; 2 {2 > 2 ? "TRUE" : "FALSE"} </p>
        <p> 2 &gt; 4 {2 > 4 ? "TRUE" : "FALSE"} </p>
        <p> 4 &gt; 2 {4 > 2 ? "TRUE" : "FALSE"} </p>
        <div>
          4 &gt; 2 {4 > 2 ? <h1>Hello world</h1> : <p>Hello mini world</p>}
        </div>

        {/* Display API Result */}
        <div>
          <p>Result: {data}</p>
        </div>
      </span>
    </div>
  )
}
