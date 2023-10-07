import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ProductSession from '../frontPageBody/productSession';
import ProductCategories from '../frontPageBody/productCategories'
import Banner from '../frontPageBody/banner';


const FrontPage = () => {
  const [userStatus, setUserStatus] = useState({ status: false, user: null });

  useEffect(() => {
    async function verifyUser() {
      try {
        const response = await axios.get('/api/verify', { withCredentials: true });
        setUserStatus(response.data);
      } catch (error) {
        console.error(error);
        // Handle error (e.g., redirect to login page)
      }
    }

    verifyUser();
  }, []);
    return (
        <div>
          <Banner/>
      <ProductCategories/>
<ProductSession/>
        </div>
      );
}
 
export default FrontPage;