import React,{useState} from 'react';
import jumialogo from '../../images/Jumia-Logo.png';
import { FaSearch } from 'react-icons/fa';
import {AiOutlineUser,AiOutlineInbox,AiOutlineHeart} from 'react-icons/ai';
import {IoIosArrowDown} from 'react-icons/io';
import {MdKeyboardArrowUp} from 'react-icons/md'
import './storeNavbar.css';
//import DropDownMenuItem from '../store/itemNavbar';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { useCart } from '../../context/CartContext';




const Store = () => {
  const [isDropdownOpen,setIsDropdownOpen] =useState(false);

    const toggleDropdownOpen = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
    }

    const {cartCount}=useCart();

  return (
    <div className="store-container">
      <Link to="/">
      <div className="logo-container">
        <img src={jumialogo} alt="" height={100} width={180} />
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
      <div className="menu-container">
        <div className="menu-item">
        <div className={isDropdownOpen? "dropdown-menu-item-never":"dropdown-menu-item"} >
            <div className="user-icon">
                <AiOutlineUser size={25}/>
            </div>
            <div className="menu-text">
                Account
            </div>
            <div className='drop-icon' onClick={toggleDropdownOpen} style={{cursor: "pointer"}}>
                {isDropdownOpen ?<IoIosArrowDown size={25} /> :<MdKeyboardArrowUp size={25} />} 
                </div>
             {isDropdownOpen &&(
                <div className='dropdown-container'>
                 <div className="dropdown-content">
                 <div className="dropdown-item-button">
                  <Link to="/signin">
                    <button type='button' className='btn btn-default' style={{cursor:'pointer'}}>SIGN IN</button>
                    </Link>
                 </div>
                 <div className='dropdown-item'>
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
                 <div className='dropdown-item-savedItem'>
                    <AiOutlineHeart/>
                    <Link to='/signin' style={{textDecoration:'none',color:'inherit'}}>
                    <div>Saved Items</div>
                    </Link>
                 </div>
                 </div>
                 </div>
                 </div>
             )}
        </div>
        </div>
        <div className="menu-item-cart">
          <AiOutlineShoppingCart size={28}/>
          <Link to="/bookings" style={{textDecoration:'none',color:'inherit'}}>
          <div>
            <div className='cart-number'>
              <div>{cartCount}</div>
            </div>
          Cart
          </div>
          </Link>
          
          </div>
      </div>
      {/** the end of the account and the cart buttons  */}
    </div>
  );
};

export default Store;
