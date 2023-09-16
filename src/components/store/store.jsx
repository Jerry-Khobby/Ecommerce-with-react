import React,{useState} from 'react';
import jumialogo from '../../images/Jumia-Logo.png';
import { FaSearch } from 'react-icons/fa';
 import {AiOutlineUser,AiOutlineInbox,} from 'react-icons/ai';
import './storeNavbar.css';
//import DropDownMenuItem from '../store/itemNavbar';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {BiUserCircle} from 'react-icons/bi'
import { useSelector } from 'react-redux';




const Store = () => {
  const [isDropdownOpen,setIsDropdownOpen] =useState(false);

    const toggleDropdownOpen = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
    }

    const quantity = useSelector((state) => {
      // Assuming you have set up your Redux store correctly, and you have a 'cart' slice
      return state.cart.cartItems.reduce((totalQuantity, item) => {
        return totalQuantity + item.quantity;
      }, 0);
    });

  return (
    <div className="store-container">
      <Link to="/">
      <div className="logo-container">
        <img src={jumialogo} alt="" height={100} width={100} />
      </div>
      </Link>
      <div className="search-container">
        <div className="search-box">
          <div className="search-icon">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search products, brands, items"
            className="search-input"
          />
        </div>
        <div className="search-button-container">
          <button className="search-button">SEARCH</button>
        </div>
      </div>
      {/** the account and the cart buttons  */}
    <div className='cart-icon-account-container'>
        <Link to="/bookings" style={{color:'inherit',textDecoration:'none'}}>
      <div className='cart-icon-count-container'>
          <AiOutlineShoppingCart size={28}/>
        <div className='cart-number'>
          <p>{quantity}</p>
        </div>
      </div>
      </Link>
      <div className='account-icon-container'>
       <BiUserCircle size={28} onClick={toggleDropdownOpen} cursor='pointer'/>
      </div>
      {isDropdownOpen &&(
          <div className='dropdown-container'>
          <div className="dropdown-content">
          <div className="dropdown-item-button">
           <Link to="/signin">
             <button type='button' className='btn btn-default' style={{cursor:'pointer'}}>SIGN IN</button>
             </Link>
          </div>
          <div className='dropdown-item' >
          <div className="dropdown-item-account">
             <AiOutlineUser/>
             <Link to='/signin' style={{textDecoration:'none',color:'inherit'}}>
             <div>My Account</div>
             </Link>
          </div>
          <div className="dropdown-item-orders">
             <AiOutlineInbox/>
             <Link to='/signin' style={{textDecoration:'none',color:'inherit'}}>
             <div>Orders</div>
             </Link>
          </div>
          </div>
          </div>
          </div>
      )}
    </div>
    </div>
  );
};

export default Store;
