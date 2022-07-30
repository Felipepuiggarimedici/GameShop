const isItemInWishlist = (id) =>{
    let itemFound = false;
    let wishlist = localStorage.getItem("wishlist");
    if (wishlist) {
        wishlist = JSON.parse(wishlist);
        wishlist.forEach((wishlistItem) => {
            if (wishlistItem.id === id) {
                itemFound = true;
            }
        });
    }
    return itemFound;
}

export default isItemInWishlist;