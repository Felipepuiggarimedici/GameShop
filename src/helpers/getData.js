const getData = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(require("./../data/games.json"))
      }else{
        reject('Games not found')
      }
    }, 2000)
});

export default getData;