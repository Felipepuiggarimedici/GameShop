import React, { useEffect, useState } from 'react';
import getNamesAndIds from '../../helpers/getNamesAndIds';
import { Navigate, useParams } from "react-router-dom";

const SearchBar = () => {
    const [searchPerformed, setSearch] = useState(false);
    const [result, setResult] = useState([]);

    const routingInfo = useParams();
    if (routingInfo === "") {
        console.log(routingInfo)
        setSearch(false);
    }

    const retrieveNamesAndIds = async() => {
        let namesAndIds = null;
        try {
            namesAndIds = await getNamesAndIds();
        }
        catch(error) {
            console.log("Could not retrieve games");
        }
        finally {
            return namesAndIds;
        }
    }
    const attemptSearch = async(e) => {
        e.preventDefault();
        const namesAndIds = await retrieveNamesAndIds();
        let searchString = e.target.value;
        if (searchString === "") {
            setResult(namesAndIds);
        }
        else {
            setSearch(true);
        }

        const names = namesAndIds.map((game) => game.name.toLowerCase());
        //checks if the game that is exactly the one searched for exists
        if (names.includes(searchString.toLowerCase())) {
            setResult(...result, namesAndIds.find(game => game.name.toLowerCase() === searchString.toLowerCase()).id);
        }
        else {
            //checks if the name is written in a shorter version
            const shortVersionNames = names.map((name) => name.slice(0, searchString.length));
            if (shortVersionNames.includes(searchString.toLowerCase())) {
                setResult([...result, namesAndIds.find(game => game.name.slice(0, searchString.length).toLowerCase() === searchString.toLowerCase()).id]);
            }
        }
    }
    
    return <>
    <div className="searchBarContainer">
        <form>
            <input type="text" onChange={attemptSearch} placeholder="Search.." name="search" className='inputText'/>
            <button type="submit" className='SearchButton'><i className="fa fa-search"></i></button>
        </form>
        {searchPerformed ? <Navigate to= {`/search/${result}`}/> : <></>}
    </div>
    </>
}
export default SearchBar;