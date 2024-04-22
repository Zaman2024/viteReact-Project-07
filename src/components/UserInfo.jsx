import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserInfo() {

    const {userid} = useParams();

  return (
    <div className='flex justify-center m-4'>
      <h1 className='bg-slate-700 text-white/75 text-center px-28 py-5 text-2xl'> User Info :{userid}</h1>
    </div>
  )
}



