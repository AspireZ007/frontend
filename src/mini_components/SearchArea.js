import React from 'react';
import Searchbar from './Seachbar';
import Dropdown from './Dropdown';
import '../CSS/searcharea.css'
function SearchArea() {
    return ( 
        <div className='search-area-div' >
            <Dropdown/>
            <Searchbar/>
        </div>
     );
}

export default SearchArea;