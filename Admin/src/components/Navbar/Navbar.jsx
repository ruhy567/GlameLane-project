import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
       <Link to='/' className='logo' style={{ textDecoration: 'none' }}>
  <span 
    style={{ 
      fontSize: '28px', 
      fontWeight: 'bold', 
      fontFamily: 'Poppins, sans-serif', 
      letterSpacing: '1px', 
      color: 'orange',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' 
    }}
  >
    GlameLane
  </span>
</Link>
        <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar