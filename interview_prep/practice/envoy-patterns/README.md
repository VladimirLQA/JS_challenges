# Core idea

Purely functional programs have no **mutable** state — but real programs need state.
These 7 patterns show how to carry state explicitly through functions,
building from simple closures up to full fold-with-transform pipelines.

## 1. Function Object

Bundle a function together with the state it needs.
Instead of passing state as arguments every call, close over it.

```
// Instead of: compute(data, config, cache)
// We wrap state in an object with a call method
```

## 2. Memoize

A Function Object that remembers its prior results and returns the cached answer
when called again with the same inputs.

## 3. Lazy objects

Don't compute a value until it's actually needed.
The object holds a `thunk`(1.) and evaluates it on first access.

### Annotations:

1. **Thunk** `is a piece of code or data structure that encapsulates a delayed computation.`
   It represents a value that has not yet been calculated; the actual computation is performed only
   when the value is needed (a process called "forcing" the thunk).
