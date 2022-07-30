import getItemInfoById from "./getItemInfoById.js";

const getDataByIds= async (currentIdString, firstSearch) => {
  if (currentIdString.arrayOfIds === "noResult"){
      return "No result";
  }
  else { 
    let filteredArray = [];
    try {
      //credits to https://stackoverflow.com/questions/52189621/extract-numbers-from-array-mixed-with-strings-javascript
      filteredArray =  currentIdString.arrayOfIds.split(',');
    }catch(error) {
      filteredArray = currentIdString;
    }

    const gameList = await Promise.all(filteredArray.map(async (id) => await getItemInfoById(id)));
    if (firstSearch) {
      window.sessionStorage.setItem("firstSearchedItemId", gameList[0].id);
    }
    else if (filteredArray[0] === window.sessionStorage.getItem("firstSearchedItemId")) {
      return "No more games";
    }
    return gameList; 
  }
}
export default getDataByIds;