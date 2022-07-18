import React, { useEffect, useState } from 'react';
import getNamesAndIds from '../../helpers/getNamesAndIds';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchPerformed, setSearch] = useState(false);
    const [result, setResult] = useState([]);

    const navigate = useNavigate();

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
            navigate(``);
            setResult([]);
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
            if (shortVersionNames.includes(searchString.toLowerCase()) && searchString !== "") {
                setResult([...result, namesAndIds.find(game => game.name.slice(0, searchString.length).toLowerCase() === searchString.toLowerCase()).id]);
                if (result.length !== 0) {
                    //removes duplicates from result
                    setResult([...new Set(result)])
                }
            }
            else if (searchString !== "") {
                navigate(`/search/noResult`);
                setResult([]);
            }
        }
    }
    useEffect(() =>{
        if (searchPerformed && result.length !== 0 ) {
            navigate(`/search/${result}`);
        }
        // eslint-disable-next-line
    }, [searchPerformed, result]);
    
    return <>
    <div className="searchBarContainer">
        <form>
            <input type="text" onChange={attemptSearch} placeholder="Search.." name="search" className='inputText'/>
        </form>
    </div>
    </>
}
export default SearchBar;