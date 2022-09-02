import React, {useRef} from "react";

const Input = React.forwardRef(({classNameLabel, label, classNameInput, type, placeholder, name, ...props }, ref) => {
    return (
        <>
            <label className={classNameLabel}
            >
                {label}
            </label>
            <input className={classNameInput}
                   type={type}
                   placeholder={placeholder}
                   ref={ref}
                   name={name}
                   autoComplete='on'
                   {...props}
            />
        </>
    )
})

export default Input