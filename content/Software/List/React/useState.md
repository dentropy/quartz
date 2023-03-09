---
id: zGa0CdbpLTcroZQZKQWPT
title: useState
desc: ''
updated: 1641198371453
created: 1641198341831
---

``` javascript
import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

ReactDOM.render(<FavoriteColor />, document.getElementById('root'));
````

* [React useState Hook](https://www.w3schools.com/react/react_usestate.asp)