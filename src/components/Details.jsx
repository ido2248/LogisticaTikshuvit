import React from 'react'


function Details() {
  return (
    <div dir='rtl' className='text-[16px] items-center justify-center flex h-[60vh] w-4/5'>
        <div className='bg-gray-400 rounded-lg w-[93%] flex flex-col p-4 mx-6 gap-[10px] shadow-2xl'>
          <table className='w-full text-center border-collapse'>
            <thead>
              <tr>
                <th>masad</th>
                <th>meket</th>
                <th>item name</th>
                <th>description</th>
                <th>how meany there is</th>
                <th> how meany requested</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Details