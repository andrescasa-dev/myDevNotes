# Uml
Its a diagram system where can be found the structure of a OPP solution.  

<p align="center">
  <img width="600" src="https://i.stack.imgur.com/JGZCr.png">
</p>

# Class composition
<p align="center">
  <img width="600" src="https://static.platzi.com/media/user_upload/clase-1897e6cf-84b3-4432-926b-aff4fc4db122.jpg">
</p>

## Visibility 
- \- private
- \+ Public
- ~ default
- \# protected 

<p align="center">
  <img width="600" src="https://miro.medium.com/max/1400/1*M2agGfUv-8MU7d19zHOU3A.png">
</p>

## Private
Only the class owner has access to the variable.

## Public
The variable can be reatch from everywhere.

## Default
Only from the package and the classowner

## Protected
Only the "this object" and their child has access to the variable.

# Relations

## Association
(Class which use) => (Utility class)

<p align="center">
  <img width="600" src="https://static.platzi.com/media/user_upload/uml-relacion-asociacion-99b916c6-1f80-4b61-889a-ebf6e74f4f23.jpg">
</p>
its means that, if Class B break down so a method of Class A can't be use.

## Inheritance
(child) => (father)
<p align="center">
  <img width="" height="600" src="https://static.platzi.com/media/user_upload/herencia-clases-53cb3117-def7-433f-adc5-4ad183d6b5e7.jpg">
</p>

the child *inherits* some **methods and properties** of the father

## Aggregation
(The whole)<>= (*1)(The part)
<p align="center">
  <img width="600" height="" src="https://static.platzi.com/media/user_upload/agregacion-6489d946-cc06-4e3c-a976-f6435531b4f2.jpg">
</p>

## Composition
(The whole)<>= (*1)(The part)
<p align="center">
  <img width="600" height="" src="https://static.platzi.com/media/user_upload/uml-relacion-composicion-2d4cb1fa-5422-44e3-849b-3a3e2d276733.jpg">
</p>

## Difference between aggregation and composition
<p align="center">
  <img width="600" height="" src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots_2019/klassendiagramme-uml-ES-9.png">
</p>

