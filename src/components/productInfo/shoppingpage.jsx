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
<MenClothing categorynames={menClothings} header="Men Clothings" route="/cart/MenClothing"/>
<MenClothing categorynames={applephones} header="Apple Devices"  route="/cart/AppleDevices"/>
<MenClothing categorynames={childrenShoes} header="Children Shoes"  route="/cart/ChildrenShoes"/>
<MenClothing categorynames={electronicDevices} header="Electronic Devices"  route="/cart/electronicDevices"/>
</div>
    );
}
 
export default ShoppingPage;