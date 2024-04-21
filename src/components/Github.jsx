import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
  //----1st Method for fatching Data----
    const data = useLoaderData([])

//-------2nd Method for fatching Data-----
  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Zaman2024')
  //   .then(res => res.json())
  //   .then (res => setData(res))
  // },[])

  return (
    <div className='flex flex-row  justify-center items-center'>
      <div className='text-center'>
        <h1 className='p-5'>Zaman : {data.following}</h1>
        <img src={data.avatar_url} alt="image" width={250} className='rounded-lg' />
      
    </div>
    </div>
  )
}

export const GithubData = async()=>{
  const response = await fetch('https://api.github.com/users/Zaman2024')
  return response.json()
}

