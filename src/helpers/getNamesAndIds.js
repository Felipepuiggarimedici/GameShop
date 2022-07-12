const getNamesAndIds = () => {
    return new Promise((res, rej) => {
        try {
            res(require("./../data/games.json").map((game) => {
                return {name:game.name, id:game.id};
            }));
        }
        catch(error) {
            rej("Could not get games");
        }
    });
}
export default getNamesAndIds;