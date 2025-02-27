import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>
                Current Count: {count}
            </h3>
            <button onClick = {() => setCount(count+1)}>Increase</button>
            <button onClick = {() => setCount(count-1)}>Decrease</button>
        </div>
    );
};

export default Counter;