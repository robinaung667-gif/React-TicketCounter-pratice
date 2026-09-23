import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0); // current initial value is 0
    return (
        
        
        
        <div className=" w-fit justify-center flex flex-col items-center mb-7 max-w-3xl mx-center p-10 border-b-1 border-gray-900 border bg-purple-400 "> {/* mx-auto is center all div in middle!!!*/}
            <h2 className="font-bold">Click this button to count increse</h2>
            
            <p className="flex ">
                Count: {count}
            </p>
            
            <button className="bg-blue-400 rounded-lg hover:bg-purple-400 py-2 px-2"
            onClick={() => setCount(count +1)}>Click</button> {/* called onClick to set count to change the count(0)*/}
            
        </div>
    );
}

export default Counter;