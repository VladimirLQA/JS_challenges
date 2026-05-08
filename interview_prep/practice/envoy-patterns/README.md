# Core idea

Purely functional programs have no **mutable** state — but real programs need state.
These 7 patterns show how to carry state explicitly through functions,
building from simple closures up to full fold-with-transform pipelines.

## Function as Object

Create a function that encapsulates mutable state and exposes operations on it.

## Closure

Bundle a function with persistent private state using lexical scoping.

## Constructor Function

A factory function that creates multiple independent instances with customizable initial state.

## Class style approach to deal with state

### Memoize

A Function Object that remembers its prior results and returns the cached answer
when called again with the same inputs.

### Lazy objects

Don't compute a value until it's actually needed.
The object holds a `thunk`(1.) and evaluates it on first access.

#### Annotations:

1. **Thunk** `is a piece of code or data structure that encapsulates a delayed computation.`
   It represents a value that has not yet been calculated; the actual computation is performed only
   when the value is needed (a process called "forcing" the thunk).
