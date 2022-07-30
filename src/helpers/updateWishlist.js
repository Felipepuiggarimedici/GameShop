import getItemInfoById from "./getItemInfoById";
import isItemInWishlist from "./isItemInWishlist";

const updateWishlist = async (id) => {
    let currentWishlist = localStorage.getItem("wishlist");
    if (isItemInWishlist(id)) {
        currentWishlist = JSON.parse(currentWishlist);
        currentWishlist = currentWishlist.filter((wishlistItem) => wishlistItem.id !== id);
    }
    else if (currentWishlist) {
        currentWishlist = JSON.parse(currentWishlist);
        currentWishlist.push( await getItemInfoById(id));
    } else {
        currentWishlist = [getItemInfoById(id)];
    }
    currentWishlist = JSON.stringify(currentWishlist);
    localStorage.setItem("wishlist", currentWishlist);
}
export default updateWishlist;