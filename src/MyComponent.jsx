// ? useState() = Re-renders the component when the state value changes.

// ? useRef()   = "use Reference" Does not cause re-renders when its value changes.
// ?              When you want a component to "remember" some information,
// ?              but you don't want that information to trigger new renders.

// ?              1. Accessing/Interfacing with DOM elements
// ?              2. Handling Focus, Animations, and Transitions
// ?              3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from "react";

function MyComponent() {

    //const ref = useRef(0);

    //console.log(ref);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        //console.log(inputRef);

    })

    const handleClick1 = () => {
        //ref.current = ref.current + 1;
        //console.log(ref.current);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    
    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }

    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }


    return (
        <>
            <button onClick={handleClick1}>
                Click Me 1! 
            </button>

            <input ref={inputRef1}/> <br />

            <button onClick={handleClick2}>
                Click Me 2!
            </button>

            <input ref={inputRef2} /> <br />
            
            <button onClick={handleClick3}>
                Click Me 3!
            </button>

            <input ref={inputRef3}/>
        </>
    );
};

export default MyComponent;