# The problem of shared state
it becomes apparently pure function in impure  function, because are actually mutable functions (modified the original property), for that reason in long term that kind of function are not predictable.

To avoid side effects and shared state, it's mandatory always use copy, never modified the original values.
