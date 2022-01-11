import React from 'react';

const SearchBar = ({onChange}) => {
    return (
        <div className="pa2">
        	<input 
        		className = "pa3 ba b--green bg-lightest-blue"
 		       	type="search" 
 		       	placeholder="Tìm gì đó đi" 
 		       	onChange = {onChange}
 		    />
		</div>
    )
}

export default SearchBar;