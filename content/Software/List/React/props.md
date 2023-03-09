---
id: 5HjP8PCLhvKlnNlM6WOM9
title: props
desc: ''
updated: 1634830777994
created: 1634152758706
---

``` javascript
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

## Sources

* [React Props](https://www.w3schools.com/react/react_props.asp)
  * Example is listed above
* [React State Vs Props - YouTube](https://www.youtube.com/watch?v=IYvD9oBCuJI)
  * Props are for initializing stuff from a parent element
  * If the element does not update from within props are ideal
* [Render Props – React](https://reactjs.org/docs/render-props.html)
  * Too complex
* [Components and Props – React](https://reactjs.org/docs/components-and-props.html)
