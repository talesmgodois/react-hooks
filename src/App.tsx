import * as React from "react";
import "./styles.css";

export default function App() {
  React.useEffect(() => {
    document.title = `you clicked ${state.count}`;
    // window.addEventListener("mousemove", setMousePosition);

    // return () => {
    //   window.removeEventListener("mousemove", setMousePosition);
    // };
  });

  const [state, setState] = React.useState({
    name: "Shi",
    count: 0,
    mouse: {
      x: null,
      y: null
    }
  });

  const { count, name } = state;

  const incrementCount = () => {
    setComponentState({
      count: count + 1
    });
  };

  const setMousePosition = (e: MouseEvent) => {
    setComponentState({
      mouse: {
        x: e.pageX,
        y: e.pageY
      }
    });
  };

  const setComponentState = (newState: any) => {
    setState(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  return (
    <div className="App">
      <div>
        {name}
        {count}
        <br />
        <button onClick={incrementCount}>increment count value</button>
        x: {state.mouse.x}
        y: {state.mouse.y}
      </div>
    </div>
  );
}
