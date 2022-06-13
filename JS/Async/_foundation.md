# What problem does it solve?
it solve **blocking code**, code that is slow like some API petition, processing an image etc...
using async behaviors let the program flow and delegate the blocking code and use its return when the action is finished.


# how it works

[see animated](https://youtu.be/8aGhZQkoFbQ?t=1112)

when a async behavior is 

**Call stack** => async behavior => **web API / API** => task queue: [result] => **event loop** => si está vacio el call stack => **Call stack**

the event loop watch if there is something in the call stack, if it isn't then push the result of the web api / api into the call stack.

# blocking the event loop

when you have a slow process in the call stack the event loop can't push the results ready. 

For example, for some reason i'm processing an image synchronous, and i've fetched some images to display. the Image processing will block the results, until the image is done the new images can't display. So a solution is convert the processing stuff in a async function, maybe using setTimeOut with 0.
