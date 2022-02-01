# Note-2

- use union for conditional types

```
// if the response type is beside this three then this will give error
type ResType = {
  response: "success" | "error" | "pending";
}
```

- react children type **Heading.tsx**
- how to specify children prop when pass inside another component **Parent.tsx**

- optional type: to do this just write a question mark after you have writed the element name to give type like:

```
 type HeadingType = {
   note?: string,
   id?: number,
 }
```
