/* eslint-disable react/prop-types */
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Discover Our Collections</h1>
      <p className='explore-menu-text'>Explore a wide range of fashion-forward categories designed to suit every style and occasion. Let us inspire your next look.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div 
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
              key={index} 
              className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;