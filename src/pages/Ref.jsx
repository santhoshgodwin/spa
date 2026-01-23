import { useRef  } from "react";
import CustomInput from "./ForwardRef";
 
export default function Ref() {
  const inputRef = useRef(null);

  const focusWithRef = ( () => {
    inputRef?.current?.focus();
  })
 
  return (
    <div className="app-container">
      <h2>Parent Component</h2>      
      <button className="btn" onClick={focusWithRef}>
        Click Here
      </button> 
      <CustomInput ref={inputRef} label="name: "/>
    </div>
  );
}