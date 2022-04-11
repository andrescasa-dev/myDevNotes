# What is aspect ratio
its a relation between the widht and the hight of an image

![](https://www.akiascreens.com/uploads/1/1/9/6/119623492/published/aspect-ratios.png?1614793864)


# Delete second scroll
![](https://i.postimg.cc/9MRqtZwp/second-Scroll.png)


```css
.container{
  --n: 1;
  width: calc(100% * var(--n));
}
```
A scroll exist when their child are bigger than the father. so, Setting the father width as the total width of ist children should work.

> the '100%' in calc represent de body width. This value it's taken as the default width of the children.

In this case there is no a set width of the children. It is determined by divide the **parent width** by the number of children

```css
.img-child{
  width: calc(100% / var(--n));
}
```

> At the moment it doesn't work because the variable "--n" it's setting by 1. ¿why? we don't how many images are, but using DOM we can know.

<br>

## Communication with the css using js
1. Getting the number of ".container" children

```js
const container = document.querySelector('.container');
const nChildren = container.children.length;
```
2. Giving it to the css

```js
container.style.setProperty('--n',nChildren);
```
# Scroll with css and JS
![](https://i.postimg.cc/MZfyy2yS/jsScroll.png)
considering the image above, actually the only taht we want to do is move the container.

```css
transform: translateX(
    calc( (var(--i,1) / var(--n)) * -100%) 
  );
```

>**i:** is the index (the first is 0) of the displayed element.
( first element (0) / total elements ) * 100% length parent (- because we wan to move the container to the left)



* si se movio a la izquierda aumente el index uno
* si se movio a la derecha aumente el index uno
* no se avance cuando se llege al límite


