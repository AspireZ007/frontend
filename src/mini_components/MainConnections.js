import ToggleButton from './ToggleButton.js';
import CardsArea from './CardsArea.js';
import LazyLoader from './LazyLoader.js';
import SearchArea from './SearchArea.js'
import React, { useState } from 'react';
function MainConnections() {
    const [state , setState] = useState(0);
    function handleClick(){
        setState(state ^ 1);
    }
    return ( 
        <div className="main-div">
            <ToggleButton  handleClick = {handleClick}/>
            <SearchArea/>
            <CardsArea toggleState = {state}/>
            <LazyLoader/>
        </div>
     );
}

export default MainConnections;