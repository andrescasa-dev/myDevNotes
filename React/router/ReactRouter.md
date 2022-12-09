# from v5 to v6
[medium article](https://dev.to/arunavamodak/react-router-v5-vs-v6-dp0)

# React router
it's a js library for make SPA React applications, it help us to define paths or "routes" that the user can go into our SPA. this is a client side rendering.

# Client side rendering 
in the first petition for html to our server the user get all the pages in our App, even its paths (created wih react router dom)

# Analogy
Using react router is like creating a map (paper map) so that the user can move.

1. Creating the paper where i'm going to draw the map
2. Drawing the routes (paths) of my map
3. Making possible that the user can move

i can create path in an non-existent map, and there is no point of drawing and creating the map if we don't let the user tu use it.

# Dynamic routes
Are routes connected to an dynamic element (like an item of product in the amazon store). for each dynamic item that has a detail view (the view displayed when you click in some amazon product) you need to establish the way those dynamic routes are created

|from|route|to|
|-|-|-|
|1Product |=== dynamic route (id=1)===>| 
|2Product |=== dynamic route (id=2)===>|
|||use a detail component(use the id to fetch data)|
|3Product |=== dynamic route (id=3)===>|
|4Product| === dynamic route (id=4)===> |

for displaying the detail a blueprint (a component) are used, but this needs the data of the product that the user select. With that in mind, react router can pass variables trough the dynamic route (rote params like http param), those look like this "products/:id"