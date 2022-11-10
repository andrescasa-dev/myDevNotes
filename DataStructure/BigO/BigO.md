
# How well is the solution
[Course CheatSheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)
| [bigOWeb](https://www.bigocheatsheet.com/)
## 1. Readable
that another developer can understand the solution in the most easily way.

## 2. Scalability
accomplish the next characteristics even if the code works.

> its important knowing how much scalable the solution it has to be

## efficient
memory and runtime optimum

## effective
can solve the problem given properly

## 3. development time
it consist in taking care about how much time the developer team should expend in readability and scalability, it depend in the context, some times we just want to be faster and not work in a strong scalable solution.

# scalability 
we can measure a code depending on time because it the runtime depends in the machine and some other factors like the language. instead we use big O notation:

![](https://i.postimg.cc/s2kHhSjb/Screenshot-from-2022-10-29-17-09-32.png)

# Linear time O(n)
for each element there is an operation
![](https://i.postimg.cc/MT8bxJmj/Screenshot-from-2022-10-29-17-18-09.png)

```js
function myOn(arr){
  return arr.map(em => '<' + em + '</>')
}
```

# Constant time 0(1)
The increase of elements doesn't affect the performance
![](https://i.postimg.cc/JhG5q80v/Screenshot-from-2022-11-02-19-26-36.png)

> The case above is a O(2) algorithm, it takes 2 operation no matter the items quantity.
> But it's still called "O(1)"

```js
function doubleFirstTwo(arr){
  arr[0] *= 2;
  arr[1] *= 2;
}
```
# rules of book
the Objective of Big O notation is analyses the behavior of the Operations vs element graph. the real operation of the algorithm doesn't care

the n value must be considered as a huge number (a little like the infinite)

## **1. Worst case:** 
for example in a finding algorithm it's thinking that the element to fin is in the last index.
## **2. Drop the constants:**
 like 1/2 * n or 2 + n, just drop it
## **3. different terms for inputs:** 
the n depends in one set of element, could be "m" or "x" as well. its important becouse we have some other "source of elements" we must represented with other letter.

```js
(firstArg, secondArg) => {
  firstArg.forEach(a => a++) // O(n)
  secondArg-forEach(a => a++) // O(m)
}
//the algo is O(n + m)
```
## 4. Drop all non-dominants
only keep with the O(something) with the biggest wight
> n! > 2^n >  n² > n > k

### for Example
- O(3n²+n+3) => O(n²)
- O(3n²+n³) => O(n³)
> if the complexity is n³ it means that your are doing something wrong, 3 loops nested its a code smell.
