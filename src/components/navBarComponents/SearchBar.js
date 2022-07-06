import React from 'react';
const SearchBar = () => {
    const attemptSearch = (e) => {

    }
    
    return <>
    <div className="searchBarContainer">
        <form action="/action_page.php">
            <input type="text" onChange={attemptSearch} placeholder="Search.." name="search" className='inputText'/>
            <button type="submit" className='SearchButton'><i className="fa fa-search"></i></button>
        </form>
    </div>
    </>
}
export default SearchBar;