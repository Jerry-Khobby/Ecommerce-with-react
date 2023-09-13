import React from 'react'
import {useParams} from 'react-router-dom';

const CategoryCart = () => {
    const {header,categoryId} =useParams();
    return ( 
        <div>
            {header}
            {categoryId}
            <div>
                <h1>It is Under Construction(<>);</></h1>
            </div>
        </div>
     );
}
 
export default CategoryCart;