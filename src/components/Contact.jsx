import React from 'react'

export default function Contact() {
  return (
    <div className='flex justify-between items-center gap-5 bg-slate-500 bg-opacity-40 mx-80 my-8 px-8 rounded-2xl'>
      
      <div className='flex flex-col gap-4 p-3'>
        <label> Name :
          <input className='bg-black/40 p-1 rounded-xl ml-3 outline-none' type="text" placeholder='Your name' />
        </label>
        <label> Email :
          <input className='bg-black/40 p-1 rounded-xl ml-3 outline-none' type="text" placeholder='Your e-mail id' />
        </label>
        <label> Your Massage : <br/>
          <textarea className='bg-black/40 p-1 rounded-xl ml-16 mt-1 outline-none' cols="20" rows="5" placeholder='Comments'/>
        </label>
        
      </div>
      <div>
        <img src="./contact2.png" alt="Image" width={250}/>
      </div>
    </div>
  )
}

