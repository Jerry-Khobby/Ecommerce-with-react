import React from 'react'
//import Store from '../store/store';
import ProductSession from '../frontPageBody/productSession';
import PreFooter from '../footerSection/preFooter';
import ProductCategories from '../frontPageBody/productCategories'
import Banner from '../frontPageBody/banner';


const FrontPage = () => {
    return (
        <div>
          <Banner/>
      <ProductCategories/>
<ProductSession/>
<PreFooter/>
        </div>
      );
}
 
export default FrontPage;