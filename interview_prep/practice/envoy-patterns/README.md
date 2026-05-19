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
A constructor returns a new closure, allowing initialization of state and reuse of the object definition without duplication.

## Method selector

A single dispatcher function that selects and returns the appropriate method closure based on a message symbol.
The constructor returns a procedure that accepts a symbol (method name) and dispatches
to the appropriate inner procedure (lambda) via a case or similar selection mechanism,
ensuring all methods share the same closed-over variables

## Message-Passing Interface

Provides a convenient, object-oriented-style interface for interacting with Method Selector-based objects.
It defines a generic `send` procedure that takes an _object, a message (symbol), and arguments (...args)_, then applies
the selected method, improving readability and mimicking message-passing conventions.

## Generic function

Creates top-level procedures for each supported method, allowing objects to be used
seamlessly with standard functional tools such as `map, apply` and `filter`. Each generic function extracts the object
and forwards arguments to the appropriate method via the selector.

## Delegation

Simulates inheritance or extension by having a new object maintain an instance of a base object as an internal variable.
Specific new behaviours are implemented locally; unrecognized messages are delegated to the base object,
promoting code reuse without duplication.

## Private Method

This pattern eliminates duplicated code among methods within a Method Selector
by defining local helper procedures inside the closure’s lexical environment.
These helpers can access shared state and remain inaccessible to external code, `simulating private` methods.

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
