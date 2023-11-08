import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import hatal from '../img/Hatal.png'
function Sidbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen (!isOpen)
  const menuItem=[
    {
      path:'/',
      name:'DistributionOfItems'
    },
    {
      path:'/details',
      name:'Details'
    },
    {
      path:'/reports',
      name:'Reports'
    },
    {
      path:'/users',
      name:'Users'
    },
  ]
  return (
   <>
    <div className="bg-white flex h-[80px] justify-end items-center w-full text-black">
      <Link to="#" className="mr-8 text-[32px] bg-none">
        <AiOutlineMenu onClick={toggle}/>
      </Link>
    </div>
    <nav className={isOpen ? 'bg-black w-[390px] h-[100vh] flex justify-center fixed top-0 transition-[350ms] text-white right-0' : 'bg-black w-[250px] h-[100vh] flex justify-center fixed top-0 transition-[350ms] right-[-100%]'}>
      <ul className="w-full" onClick={toggle}>
        <li className="bg-black w-full h-[100px] right-0 flex justify-start items-center">
          <Link to='#' className=" pl-4 text-[30px] bg-none">
            <AiOutlineClose/>
          </Link>
          <img src={hatal} alt="Hatal" className="h-8 w-8 ml-4" />
          <p dir="rtl" className="text-[20px] px-4"> מערכת לוגיסטיקה תקשובית</p>
          <img src={hatal} alt="Hatal" className="h-8 w-8 mr-4" />
        </li>
        {
            menuItem.map((item, index)=>{
              return (
                <li key={index} className='flex justify-end items-center py-2 pr-4 h-[60px] list-none  '>
                  <Link to={item.path} className='w-[95%] flex justify-end text-white hover:bg-blue-500 text-[18px] h-full px-4 items-center rounded no-underline' >
                    <span className="ml-4">{item.name}</span>
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
