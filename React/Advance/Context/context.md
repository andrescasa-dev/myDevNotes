# Context 
It's a state manager that let us create a **Provider** and several **consumers**. The objective is to avoid passing props to components that doesn't need it but its child (or grandchild) does.

![img](https://i.postimg.cc/vHXMzjWb/Screenshot-from-2022-12-03-09-14-19.png)

# Prop derailing

![img](https://i.postimg.cc/T1HN4rQ2/Screenshot-from-2022-12-03-09-06-36.png)


# what is the modern alternative
- Redux 
- MobX
But React Context is a very good approach.


# renderProps (composition) or use context? 
whe we wan to use like "global setting" or one instance state we must use 


# When not to use it
when trying to avoid passing props until to one specific deep component.
The main idea is that the intermediate components doesn't care about the deepest props component, so those in the middle shouldn't access to that component.

In this case the best way si creating the deepest component in our top component and then, when is require render it via props.


# Normal
Intermediate component don't need access the data of "avatar"
![img](https://i.postimg.cc/yxX4Y5w1/Screenshot-from-2022-12-05-14-36-05.png)

# creating the our deep access component in a top Component
In the previous example avatar was our deep access component, so a good solution could be create that component in a top level component, so if we want to use "Avatar" the only thing that we need to do is accessing to our "Avatar" component via props

![img](https://i.postimg.cc/jST2cYsX/Screenshot-from-2022-12-05-14-36-49.png)

![Source](https://reactjs.org/docs/context.html#before-you-use-context)