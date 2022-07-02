const getData = (currentCategory) => {
    return new Promise((resolve, reject) => {
      let condition = true;

      setTimeout(()=>{
        if(condition){
          if (Object.entries(currentCategory).length === 0) {
            resolve(require("./../data/games.json"))
          }
          else {
            resolve(require("./../data/games.json").filter((game) => game.categories.includes(currentCategory.categoryName)));
          }
        }else{
          reject('Games not found')
        }
      }, 2000)
  });
}
export default getData;