# Note-13

## Generic props

- generic types

```
// you can pass an array of anything
{T extends {}}

// can pass and array of string or number
{T extends string | number}

// we can also define that the object must have a id of number
{T extends {id: number}}
```
