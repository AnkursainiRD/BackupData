import { useState } from "react"
import { FaSearch, FaSignInAlt, FaUser } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"

function Header() {
    const user={id:"a",role:"u"}
    const [isOpen,setIsOpen]=useState<boolean>(false)
    function handleLogout(){
         setIsOpen(false)
    }
  return (
    <nav className="header">
        <Link to={'/'}  onClick={()=>setIsOpen(false)}>HOME</Link>
        <Link to={'/search'}  onClick={()=>setIsOpen(false)}><FaSearch/></Link>
        <Link to={'/cart'}  onClick={()=>setIsOpen(false)}><FaCartShopping/></Link>

        {
            user?.id?
            (
            <><button onClick={()=>setIsOpen(!isOpen)}><FaUser/></button>
            <dialog open={isOpen}>
                <div>
                    {user?.role=="admin"&& (<Link to={'/admin/dashboard'}  onClick={()=>setIsOpen(false)}>Admin</Link>)}
                </div>
                <Link to={'/oders'} onClick={()=>setIsOpen(false)}>Orders</Link>
                <button  onClick={handleLogout}><FaSignInAlt/>Login</button>
            </dialog>
            </>
            ):
            (
                <Link to={'/login'}><FaSignInAlt/></Link>
            )
        }
    </nav>
  )
}

export default Header