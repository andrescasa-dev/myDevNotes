# 1 - Sort 10 schools around your house by distance:
doesn't matter, insertion sort because is faster to implement

# 2 - eBay sorts listings by the current Bid amount:
Radix or counting sort because we can improve the n log n with those algorithms in integers range

# 3 - Sport scores on ESPN
Quick sort because the score are going to be "random", very different between them

# 4 - Massive database (can't fit all into memory) needs to sort through past year's user data
depends the memory available, let's say we se a divide and conquer solution where we split the data in "peaces" that fit in memory, as it is a really huge data we should use quick sort because time would be a problem

# 5 - Almost sorted Udemy review data needs to update and add 2 new reviews
insertion sort, because is almost sorted

# 6 - Temperature Records for the past 50 years in Canada
merge sort because si easy to implement

# 7 - Large user name database needs to be sorted. Data is very random.
heap sort because is constant and don't use a lot of memory

# 8 - You want to teach sorting for the first time
bubble sort



# Merge
- out of place algo, in memory algo O(n)
- stable
  
# Quick
- out of place algo, in memory algo O(log(n))
- unstable
- not consistent algorithm

# Insertion
- only useful when is almost sorted
- In place
- Stable
- slow

# Heap
- really fast
- in place algo
- unstable

# Radix and counting sort
- only works with integers (better than n*log(n) in small int ranges)
- in memory algo
- stable

# Good when

# Merge
- linked list
- easy to implement
- consistent in easy to worse cases
  
# Quick
- better with random data
- better when the data has no patterns
- really fast but worst cases couldn't
- needs few memory

# Insertion
- useful when is almost sorted
- good for smaller arrays
- no memory

# Heap
- really fast
- no memory
- in place algo

# Radix Counting sort
- useful with a range of integers