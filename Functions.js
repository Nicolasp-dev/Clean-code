/*
REMEMBER:
1. Should be readable and meaningful. 
2. Should reduce cognitive load.
3. Should be concise and "to the point"
4. Should avoid unintuitive names, complex nesting and big code blocks.
5. Should follow common best practices and patterns. 
6. Should be fun to write and to maintain.

// CALLING
Calling the function may be readable -> Number and order of arguments.
- Minimize the number of parameters.
- More than 2-3 parameters may be confusing [order - less obvious].
- Refactor when is possible to use 1-2 parameters -> Use 1 parent object/map.
- Try to avoid Outputs parameters -> Modify data and cause unexpected behavior.

// WORKING
Working function should be easy/readable -> Length matters.
- Should be small. 
- Split into focus functions. 
- Try to create functions that do one operation. 
  - Levels of abstractions 
    Functions should do work that's one level of abstraction below their name. 
    -> High level: Describes clearly the function results. 
    -> Low level: Describes an action without a context. 
    - Try not to mix levels of abstractions. 
- Avoid useless extraction, make reasonable decisions. 

- TRY KEEPING FUNCTIONS PURE !
  - The same input always yield the same output. 
  - Avoid side-effects.
    [ Side effect: is an operation which does not just act on function inputs and change
      the function output but which instead changes the overall system/program state. ]
  - If side-effects are required they should be expected and tracks its behavior. 
    - The name of an impure function should describe the side-effect.

  // STAY DRY = DON'T REPEAT YOUR SELF
  - Improves scalability and maintainability.

*/
