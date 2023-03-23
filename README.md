# Gameshop
Puede ver la versión en Español haciendo click aquí

[Español](README_es.md)

This is my second Front-End project. It is about a ficticious e-commerce made for the React course I took with Coderhouse, which is the third one I took with them, thus completing the Front-End career. It is possible to expand the details without reloading the page using React routing. From there, these can be added to the cart. In the Cart view, items can be removed and there is a purchase form. Information is then uploaded to firebase, and it is possible to search the purchase with the form in the footer. 
## Deploy
You can access the deploy of the website in github pages here: https: https://gameshopfelipepuiggarimedici.netlify.app/
## Running the website directly from its repository
Once you downloaded the repository, open it with your terminal and:
* Run "npm install" and wait for the node-modules to download and later:
* Run "npm start"
It should then open in your browser. Make sure you have npm installed

## React
Doing this project I learned about the React library as well as reinforcing other important programming concepts.

## Packages and Components Open-Source used:
I used React and Sass for the styles, as well as the components: 
* [React Router Dom](https://reactrouter.com/): Essential for switching the views and navigating the components.
* [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component): This wasn't taught in the course but I thought it was important for a project like this, because it makes the project scalable. If the database becomes bigger (such as what the steam database might look like), loading all of the data at once becomes impossible. On the other hand, using this component means that data is loaded in smaller chuncks.
* [Context](https://reactjs.org/docs/context.html): React context already comes with React's installation and it was important for the making of this project.
* [Particles](https://www.npmjs.com/package/react-tsparticles): I used tsparticles, along with its fire preset, to create a more interesting background.

## Styling and Responsiveness
The styling was given with sass code and the designs are my own, but some of the styling (for example the cards with the moving red shape) was taken from codepen open-source code. The source of each of these codepens is given in the respective scss files these were used. The responsiveness was given with the media-queries, but again the form for instance was taken from codepen and it's author made it responsive.

## Firebase
We also learned to use firebase database during this programming course. The three collections made for this project are:
* gameData: Used for storing information about each game as well as the location of the images.
* sales: Used for storing the sales made by the users, to simulate what a real e-commerce would do after receiving user's data.
* categories: Used to store categories dynamically. However it wouldn't be very dynamic because adding more categories would break the responsiveness as well as the styling of the dropdown menu. Data is mainly handled by the functions in the helpers folder
### Helpers
Each of these folders receives some information, such as an id, an array of ids or a category and returns information stored either in firebase or in the session storage. Some functions there use themselves functions in the helpers so that code is not repeated. Some information had to be stored in session storage so that other components know what to load.

## Components
There are many components and I am going to give a very brief summary of what they do. 
* The footer is the only component handling the information in the bottom of the page. It also handles the search order form.
* The navBarComponents folder stores all the components in the navbar, thus handling everything from the searchbar to the Cart Widget. The searchbar handles searches in frontend, which is not the usual thing but I wanted to play with the routing limitations.
* The itemsInList folder handles the main listing of components, as well as handling data so that these are passed to the helper functions correctly. It also handles the wishlist and filters it.
* The itemsinDetail expands each game and gives more information about it. It is the only place where the games can be added to the cart, which goes against the general course recomendations which stated that it should have been possible to add items to the cart from the general list. However, I didn't do that for this project because I realized that almost all videogame stores such as Steam, Battlenet, Origin or Playstation Store only allow to add items to cart from the detailed view. So, I tried to follow the general convention. The wishlist can also be edited from here, and, in hindsight, it could have included a videogame trailer. 
* The cart components handles the cart, the purchase form, and the order display. 
### Item quantity and on the possibility of adding an authentication method
In this fictitious e-commerce you can buy several video games of the same type at the same time. For example, I can buy Battlefield 5 multiple times. This is not usual in any video game e-commerce, since a user is generally created with proper authentication, and they are given the voucher for the purchased game. From this perspective, it doesn't make much sense to buy the same game several times. However, being fictional, the main purpose of this website was to learn how to use React and expand my portfolio, so I tried to make this e-commerce as generic as possible. In the event that it is necessary, the possibility of buying the same product several times can be removed. Authentication, although it could have been done with firebase, would have required changing the styles considerably and rethinking various aspects of various components, as well as modifying the media-queries.

## Thank you for reading and I hope you like it!!
