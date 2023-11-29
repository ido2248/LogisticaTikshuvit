import React from 'react'

function Users() {
  return (
    <section dir='rtl' className='text-[22px] items-center justify-center flex  h-[70vh] w-4/5'>
      <form className=' flex flex-col  p-2 mx-6 bg-gray-400 rounded-lg w-[47%] justify-center items-center'>
        <h2 className='text-[26px] text-center'>כניסה עם משתמש</h2>
        <div className='w-[60%]'>
          <label className='mt-4 '>מספר אישי :</label>
          <input className='w-full rounded-lg m-1 pr-1 focus:outline-none' type='text'/>
        </div>
        <div className='w-[60%]'>
          <label className='mt-4 '>שם מלא :</label>
          <input className='w-full rounded-lg m-1 pr-1 focus:outline-none' type='text'/>
        </div>
      </form>
    </section>
    
  )
}

export default Users
