import React from 'react'

import Store from './components/store/store'
import { Outlet } from 'react-router-dom'



const Layout = () => {
    return ( 
        <div>
            <Store/>
            <Outlet/>
        </div>
     );
}
 
export default Layout;