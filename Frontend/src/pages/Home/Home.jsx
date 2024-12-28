
// import './Home.css'
// import Header from '../../components/Header/Header';
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
// import AppDownload from '../../components/AppDownload/AppDownload';
// import { useState } from 'react';

// const Home = () => {

//   const [category,setCategory]=useState("All");
//   return (
//     <div>
//       <Header/>
//       <ExploreMenu category={category} setCategory={setCategory}/>
//       <FoodDisplay category={category}/>
//       <AppDownload/>
//     </div>
//   )
// }

// export default Home;

//new code added

import './Home.css'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import { useState, useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const Home = () => {
  const { food_list } = useContext(StoreContext);
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const results = food_list.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchResults={searchResults} />
      <AppDownload />
    </div>
  );
};

export default Home;
