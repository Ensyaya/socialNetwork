import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextareaInput(
    {
        type = "text",
        name,
        placeHolder,
        id,
        value,
        className,
        autoComplete,
        required,
        isFocused,
        handleChange,
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <textarea
                type={type}
                name={name}
                id={id}
                value={value}
                rows="3"
                className={
                    `block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeHolder}
            />
        </div>
    );
});
