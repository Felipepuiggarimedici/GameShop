const getDataById = (currentIdString) => {
    return new Promise((resolve, reject) => {
      let condition = true;
      setTimeout(()=>{
        if(condition){
          if (currentIdString.arrayOfIds === "noResult"){
            resolve("No result");
          }
          else {
            //credits to https://stackoverflow.com/questions/52189621/extract-numbers-from-array-mixed-with-strings-javascript
            const filteredArray =  currentIdString.arrayOfIds.split(',').map(Number);
            resolve(require("../data/games.json").filter((game) => filteredArray.includes(game.id)));
          }
        }else{
          reject('Games not found')
        }
      }, 2000)
  });
}
export default getDataById;