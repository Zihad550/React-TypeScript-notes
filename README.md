# Note-11

## use type on class components

- step1: define the state and prop type

- step2: connect the type with class components; put the types with Component keyword with < > brackets. if you don't have props then put a {} object and if you don't have state then remove that.

```
// have both
Component<ComponentProps, ComponentStates>
// don't have props then replace it with {}
Component<{}, ComponentStates>
// don't have state then just remove that
Component<ComponentProps>
```

- For example see the **Counter.tsx** component.
