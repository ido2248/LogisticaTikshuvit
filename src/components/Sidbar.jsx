import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import hatal from '../img/Hatal.png'
function Sidbar() {
  const menuItem=[
    {
      path:'/',
      name:'DistributionOfItems',
      icon: BsFillBoxSeamFill
    },
    {
      path:'/details',
      name:'Details',
      icon: BiDetail
    },
    {
      path:'/reports',
      name:'Reports',
      icon: TbReportAnalytics
    },
    {
      path:'/users',
      name:'Users',
      icon: FaRegUser
    },
  ]
  return (
   <>
    {/* <div className="bg-gray-200 flex h-[80px] justify-end items-center w-full text-gray-200">
      <Link to="#" className="mr-8 text-[32px] bg-none">
      </Link>
    </div> */}
    <nav className='bg-gray-200 w-1/5 h-[100vh] flex justify-center fixed top-0 transition-[350ms] text-black right-0 border-l-4 border-black border-solid'>
      <ul className="w-full">
        <li className="bg-gray-200 w-full h-[140px] right-0 flex justify-start items-center border-b-4 border-black border-solid">
          <Link to='#' className=" pl-4 text-[30px] bg-none">
          </Link>
          <img src={hatal} alt="Hatal" className="h-8 w-8 ml-6" />
          <p dir="rtl" className="text-[20px] px-4"> מערכת לוגיסטיקה תקשובית</p>
          <img src={hatal} alt="Hatal" className="h-8 w-8 mr-4" />
        </li>
        {
            menuItem.map((item, index)=>{
              return (
                <li key={index} className='flex justify-center items-center py-2 h-[60px] list-none  '>
                  <Link to={item.path} className='w-[90%] flex justify-end text-black hover:bg-slate-300 text-[18px] h-full px-4 items-center rounded no-underline' >
                    <span className="ml-4">{item.name}</span>
                    <item.icon className='ml-4'/>
                  </Link>
                </li>
              )      
              })
          }
      </ul>
    </nav>
   </>
  )
}

export default Sidbar
