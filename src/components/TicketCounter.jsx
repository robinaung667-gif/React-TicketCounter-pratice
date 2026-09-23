import { useState } from "react";

const TicketCounter = ({ticketType, price, maxLimit}) => {
    const [count, setCount] = useState(0);

    const isMax = count >= maxLimit;
    const isMin = count <= 0; // if count is less than 0


    const handleIncrement = () =>{
        if (count < maxLimit) {
            setCount((prev) => prev + 1); // Count + 1
        }
        
    };

    const handleDecrement = () =>{
        if (count > 0) {
            setCount((prev) => prev - 1); // Count - 1
        }
        
    };
  return <div>
    <h3>{ticketType}</h3>
    <p>$ {price}</p>
    <p>MaxLimit: {maxLimit}</p>
    <button className="bg-gray-900 text-white py-2 px-2 rounded-lg"
    onClick={handleDecrement} disabled={isMin}>-</button>
    <span className="text-white text-border font-bold">{count}</span>
    <button className="bg-gray-900 text-white py-2 px-2 rounded-lg"
    onClick={handleIncrement} disabled={isMax}>+</button>
  </div>;
  
}
export default TicketCounter;
