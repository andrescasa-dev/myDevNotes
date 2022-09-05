# REST
set the way to build a API. (see easy to use)

also it's a protocol to send and get data between client and server. The main ide is sending JSON data with purpose of eny device can use the RESTful API.

CLIENT <====(JSON)====> SERVER

## Made for all devices
Before the servers only care about sending html for webpage rendering.

LAPTOP <=======(html)======= SERVER

But nowadays some other devices want to use APIs. And some of them doesn't have de proper tool to render HTML (or they doesn't expect it). This kind of devices needs JSON data. 

CLIENT <====(JSON)====> SERVER

## Easy to use
a good rest API only has nouns, and stablish to kind of endpoints:

http://buyBike.com/bikes
    - GET: get an array of bikes.
    - POST: post one or more bikes.

http://buyBike.com/bikes/:id
    - GET: get one bike
    - PUT: update an specific bike
    - DELETE: delete certain bike

### nested
http://buyBike.com/bikes/:id/reviews
    - GET: return a reviews collection of that specific bike.

# URL parameters
https://some.com/bikes/:id
the :id is the parameter.
They work as place holders, like variables.

# Query strings / query parameters
starts with "?" and helps to filter or just manipulate resources.
![](https://i.postimg.cc/qBZbhRW2/Screenshot-from-2022-09-05-15-46-56.png)

this string will be transform into a JSON:

![](https://i.postimg.cc/kXgRh0Fc/Screenshot-from-2022-09-05-18-02-28.png)