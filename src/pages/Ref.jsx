import { useRef  } from "react";
 
export default function Ref() {
  const inpurRef = useRef(null);

  const focusWithRef = ( () => {
    inpurRef?.current?.focus();
  })
 
  return (
    <div className="app-container">
      <h2>useRef Optimization Demo</h2>      
      <input ref={inpurRef} id="test"/> 
      <div></div>
      <button className="btn" onClick={focusWithRef}>
        Click Here
      </button> 
    </div>
  );
}