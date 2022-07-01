const getItemInfoById = (id) => {
    return new Promise ((resolve, reject) => {
        let condition = true;
        setTimeout(() => {
            if(condition){
                // eslint-disable-next-line
                resolve(require("./../data/games.json").filter((game) => game.id == id)[0])
            }else{
                reject(`Game with id ${id} not found`)
            }
        }, 2000);
    })
}
export default getItemInfoById;