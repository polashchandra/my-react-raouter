
import { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu,AiFillCloseSquare } from 'react-icons/ai'
const Daicinav = () => {
    const[open,setopen]=useState(false)
    const routesData = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
    ];
    return (
        <nav>
            <div className='md:hidden' onClick={()=>setopen(!open)}>
                {
                    open=== true ?<AiFillCloseSquare></AiFillCloseSquare>:<AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ul className={`md:flex duration-1000 ${open ? 'top-4':'-top-60'} md:static absolute bg-yellow-200`}>
                {
                    routesData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};



export default Daicinav;