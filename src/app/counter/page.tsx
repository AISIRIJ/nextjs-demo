'use client';
import {useState} from "react";

export default function Counter(){
    let [count,setCount]=useState(0);
    function increment(){
      setCount(count+1);
    }
    return(
        <div>
            <p>Count : {count}</p>
            <button className="bg-green-700 px-5 py-2.5 me-2 cu" onClick={increment}>Increment</button>
        </div>
    );
}