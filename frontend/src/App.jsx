import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [msg, setMsg] = useState('Hello World')
    const [data, setData] = useState(null)

    const fetchData = () => {
        fetch('http://65.2.121.87/api?msg=' + msg)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }
    return (
        <main className='p-10 w-screen h-screen'>
            <div className='border border-gray-300 flex gap-2  p-4 w-full'>
                <input type="text" className='border border-black px-1' placeholder='enter msg' onChange={(e) => setMsg(e.target.value)}/>
                <button className='p-2 bg-blue-200' onClick={fetchData}> Fetch Data</button>
            </div>
            <div>
                <h1 className='text-2xl mt-4'>Message: {
                    data ? data.message : 'loading...'
            }</h1>
            </div>
        </main>
    )
}

export default App
