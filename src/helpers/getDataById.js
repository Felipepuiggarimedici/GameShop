import getDataByCategory from "./getDataByCategory.js";

const getDataById = async (currentIdString) => {
  if (currentIdString.arrayOfIds === "noResult"){
      return "No result";
  }
  else { 
    //credits to https://stackoverflow.com/questions/52189621/extract-numbers-from-array-mixed-with-strings-javascript
    const filteredArray =  currentIdString.arrayOfIds.split(',');
    const gameList = (await getDataByCategory({})).filter(game => filteredArray.includes(game.id));
    return gameList;  
  }
}
export default getDataById;