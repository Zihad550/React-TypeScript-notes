# Note-3

## Event Props

- case-1: onclick event return nothing: **Button.tsx**
  `type ButtonProps = { handleClick: () => void; }`

- case-2: when you need to pass event **Button2.tsx**

```
// if you want to pass a second parameter you can do that also just seperate it with comma
type ButtonProps = {
   handleClick: (e:React.MouseEvent<HTMLButtonElement>, id:number) => void
}
```

- case-3: onChange Event **Input.tsx**
