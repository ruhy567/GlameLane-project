/* eslint-disable react/prop-types */
import  { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'

import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../../components/FoodItem/FoodItem'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


// const Navbar = ({setShowLogin}) => {
    
//     const [menu,setMenu]=useState("home");
//     const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
    
//     const navigate = useNavigate();
//     const logout =()=>{
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/");
//     }
  
//     return (

//         <div className='navbar'>
//         {/* <Link to='/'><img src={assets.logo} alt='' className='logo'/></Link> */}
       
//         <Link to='/' className='logo' style={{ textDecoration: 'none' }}>
//   <span 
//     style={{ 
//       fontSize: '28px', 
//       fontWeight: 'bold', 
//       fontFamily: 'Poppins, sans-serif', 
//       letterSpacing: '1px', 
//       color: 'orange',
//       textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' 
//     }}
//   >
//     GlameLane
//   </span>
// </Link>

//         <ul className='navbar-menu'>
//             <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
//             <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
//             <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
//             <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
//         </ul>
        
//         <div className="navbar-right">
//             <img src={assets.search_icon} alt="" />
//             <div className="navbar-search-icon">
//                 <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
//                 <div className={getTotalCartAmount()===0?"":"dot"}></div>
//             </div>
//             {!token?<button onClick={()=>setShowLogin(true)} >Sign in</button>
//             : <div className="navbar-profile">
//                 <img src={assets.profile_icon} alt=''></img>
//                 <ul className="nav-profile-dropdown">
//                     <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
//                     <hr />
//                     <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//                 </ul>
//             </div>
//             }
//         </div>
//     </div>
//   )
// }


//implement new code 
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { food_list, token, setToken, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = food_list.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchQuery('');
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        <span
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '1px',
            color: 'orange',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          GlameLane
        </span>
      </Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>
          Home
        </Link>
        <a href="#explore-menu" onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>
          Menu
        </a>
        {/* <a href="#app-download" onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>
          Mobile-App
        </a> */}
        <a href="#footer" onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search" ref={searchRef}>
          <input
            type="text"
            placeholder="Search for product..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button>
            <img src={assets.search_icon} alt="Search" />
          </button>
          {searchQuery && (
            <div className={`search-results ${searchQuery ? 'show' : ''}`}>
              {searchResults.length > 0 ? (
                <ul className="search-results-dropdown">
                  {searchResults.map((item) => (
                    // <li key={item._id}>
                    //   <div className="search-item">
                    //     <img src={item?.image} alt={item.name} />
                    //     <div>
                    //       <p>{item.name}</p>
                    //       <p className="search-item-price">${item.price}</p>
                    //     </div>
                    //   </div>
                    // </li>
                    <FoodItem
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                  ))}
                </ul>
              ) : (
                <p className="no-results">No results found</p>
              )}
            </div>
          )}
        </div>

        <div className="navbar-cart">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
            <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
          </Link>
        </div>

        {!token ? (
          <button className="signin-btn" onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );

};

export default Navbar