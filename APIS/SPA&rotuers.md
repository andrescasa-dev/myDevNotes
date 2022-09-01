# SPA
It's a website that only download one page (html file), for do that the res of the changing components and others pages are displayed using JavaScript

### Now
Frontend => AJAX (HTML Request) => Backend
Backend => Row Data (JSON) => frontend

### Before

Frontend => AJAX (HTML Request) => Backend
Backend => Page (HTML) => frontend

# Router
is the concept (the object) that let us stablish a link between some URL (route) and some new page, communicating this with the backend

it always is watching the "url-slot" of the page. so, at the moment that it change it will find a match a execute the corresponding callback.

```js
router.on('/myPath', () => someAction());
```