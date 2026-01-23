import { forwardRef } from "react";

const CustomInput = forwardRef( (prop, ref) => {
    return(
        <div>
            <h2>Child Component</h2>
            <label>{prop.label}</label>
            <input ref={ref} />
        </div>
    );
})

export default CustomInput;