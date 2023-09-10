import React from 'react'
import MenClothing from './shoppingcomponents/menclothing';
import products from '../../Data/products';




const ShoppingPage = () => {
    const {menClothings}=products;
    const {applephones}=products;
    const {childrenShoes}=products;
    const {electronicDevices}=products;
    return (  
        <div>
<MenClothing categorynames={menClothings} header="Men Clothings"/>
<MenClothing categorynames={applephones} header="Apple Devices"/>
<MenClothing categorynames={childrenShoes} header="Children Shoes"/>
<MenClothing categorynames={electronicDevices} header="Electronic Devices"/>
</div>
    );
}
 
export default ShoppingPage;