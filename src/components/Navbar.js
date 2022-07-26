import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import logo from '../images/ecommerce.svg'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { auth } from '../config/Config'
import { CartContext } from '../global/CartContext'



export const Navbar = ({user}) =>{

 
  const { totalQty } = useContext(CartContext);

  const history = useHistory();
 
    const logout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

  return (
    <div className='navbox'>
        <div className='leftside'>
            <img src={logo} alt="" />
        </div>
        {!user && <div className='rightside'>
            <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
            <span><Link to="login" className='navlink'>LOGIN</Link></span>
        </div>}
        {user && <div className='rightside'>
            <span><Link to="/" className='navlink'>{user}</Link></span>
            <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
            <div className='realtive'>
            <span className='no-of-products'>{totalQty}</span>
            </div>
            <span><button className='logout-btn' onClick={logout}>Logout</button></span>
        </div>}
    </div>
)
}



