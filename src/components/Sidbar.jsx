import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
function Sidbar({children}) {
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
    <div dir='rtl' className=' p-8'>
      <div className=''>
        <div className=''>
          <h1>Logo</h1>
          <div className=''>
            <AiOutlineMenu/>
          </div>
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className=''>
              <div className=''>{item.name}</div>
            </NavLink>
            
          ))
        }
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Sidbar
