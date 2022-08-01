# Gameshop
Este es mi segundo proyecto Front-End. Se trata de un e-commerce ficticio realizado para el tercer curso de Coderhouse; completando así la carrera de Front-End. Es posible ampliar el detalle de cada videojuego sin recargar la página utilizando el routing de React. A partir de ahí, estos se pueden agregar al carrito. En la vista del carrito, se pueden eliminar artículos y hay un formulario de compra. Luego, la información se sube a firebase y es posible buscar la compra con el formulario en el pie de página.
## Deploy
Podés acceder al deploy en github pages en este link: https://felipepuiggarimedici.github.io/GameShop
## Ejecutar el sitio web directamente desde su repositorio
Una vez descargado el repositorio, abrílo con tu terminal y:
* Ejecutá "npm install" y espere a que se descarguen los node'modules. Luego:
* Ejecutá "npm start"
Luego debería abrirse en el navegador. Para que esto funcione tiene que estar npm instalado.

## React
Al hacer este proyecto, aprendí a usar la biblioteca React y reforcé otros conceptos importantes de programación.

## Paquetes y componentes de código abierto utilizados:
Usé React y Sass para los estilos, así como los componentes:
* [React Router Dom](https://reactrouter.com/): Necesario para cambiar las vistas y navegar por los componentes.
* [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component): Esto no se enseñó en el curso. Sin embargo, pensé que podría ser importante para un proyecto como este porque hace que el proyecto sea escalable ya que si la base de datos fuese más grande, (por ejemplo si tuviese todos los datos de todos los juegos de Steam) podría ser imposible cargar todos los datos a la vez. Usando este componente, los datos se cargan en fragmentos más pequeños.
* [Context](https://reactjs.org/docs/context.html): React Context ya viene con la instalación de React y fue importante para la realización de este proyecto.
* [Particles](https://www.npmjs.com/package/react-tsparticles): Usé tsparticles, junto con el preset "tsparticles-preset-fire", para crear un fondo más interesante.

## Estilo y Responsiveness
El estilo lo hice con el código sass y los diseños son míos, pero parte del estilo (por ejemplo, las tarjetas con la forma roja) lo tomé de código abierto de codepen. La fuente de cada uno de estos codepens se proporciona en los respectivos archivos scss que se usaron. Lo responsive lo logré con las media-queries, pero el formulario, por ejemplo, se tomó de codepen y su autor lo hizo responsive.

## Firebase
También aprendimos a usar las base de datos de firebase durante este curso de programación. Las tres colecciones realizadas para este proyecto son:
* gameData: Se utiliza para almacenar información sobre cada juego, así como la ubicación de las imágenes.
* ventas: Se utiliza para almacenar las ventas realizadas por los usuarios y así simular lo que haría un e-commerce real después de recibir los datos del usuario.
* categorías: se utiliza para almacenar categorías de forma dinámica. Sin embargo, no sería muy dinámico porque agregar más categorías rompería la capacidad de respuesta y los estilos del menú desplegable. Se interactua con firebase principalmente con las funciones en la carpeta de helpers.
### Helpers
Cada una de estas carpetas recibe parametros; por ejemplo un id, un array de ids o una categoría, y devuelve información almacenada en firebase o en el local-storage. Algunas funciones allí usan funciones hermanas en la carpeta helpers para que el código no se repita. Parte de la información tuvo que almacenarse en el almacenamiento de la sesión para que otros componentes supieran qué cargar.

## Componentes
Hay muchos componentes y voy a dar un breve resumen de lo que hacen.
* El Footer es el único componente que maneja la información en la parte inferior de la página. También maneja el formulario de pedido de búsqueda.
* La carpeta navBarComponents almacena todos los componentes de la barra de navegación, manejando así todo, desde la barra de búsqueda hasta el Widget del carrito. La barra de búsqueda maneja las búsquedas con el routing, que no es lo habitual, pero quería jugar con las limitaciones del routing.
* La carpeta itemsInList maneja la lista principal de componentes, así como el manejo de datos para que estos se pasen correctamente a las funciones en helpers. También maneja la wishlist y la filtra.
* ItemsinDetail amplía cada juego y brinda más información al respecto. Es el único lugar donde se pueden agregar los juegos al carrito, lo que va en contra de las recomendaciones generales del curso que establecen que debería haber sido posible agregar elementos al carrito desde la lista general. Sin embargo, no hice eso para este proyecto porque me di cuenta de que casi todas las tiendas de videojuegos como Steam, Battlenet, Origin o Playstation Store solo permiten agregar artículos al carrito desde la vista detallada. De esta manera, traté de seguir la convención general. La lista de deseos también se puede editar desde aquí y, en retrospectiva, podría haber incluido los trailers de cada videojuego.
* Los componentes del carrito manejan el carrito, el formulario de compra y la visualización del pedido.
### Sobre la posibilidad de comprar varios videojuegos a la vez y sobre la posibilidad de agregar un método de autenticación
En este e-commerce ficticio se pueden comprar varios videojuegos del mismo tipo a la vez. Por ejemplo, puedo comprar el Battlefield 5 varias veces. Esto no es lo usual en cualquier e-commerce de videojuegos, ya que generalmente se crea un usuario con su debida autenticación, y se le da el vale para el juego comprado. Si se piensa así no tiene mucho sentido que se compre el mismo juego varias veces. Sin embargo, al ser ficticio, el principal proposito de esta página web fue aprender a utilizar React y ampliar mi portfolio, así que intenté que este e-commerce sea lo suficientemente genérico posible. En el caso que se necesite, se puede quitar la posibilidad de comprar varias veces el mismo producto. La autenticación, si bien la podría haber hecho con firebase, hubiese necesitado cambiar los estilos considerablemente y repensar varios aspectos de varios componentes, así como modificar los media-queries.

## Gracias por leer y espero que te guste!!