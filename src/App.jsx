import CardContainer from "./components/CardContainer";
import TicketCounter from "./components/TicketCounter";

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="max-w-[1200px] px-6 py-4 text-[1.08rem] leading-relaxed text-slate-800">
        <h2 className="font-bold">React-Exercise</h2>
        <p>
          In this assignment, you will build a focused ticket booking counter interface for an on-site
          box office terminal. The primary goal is to practice core React fundamentals functional
          components, unidirectional data flow via props, wrapper layouts using props.children, and
          reactive state handling using useState.
        </p>

        <p className="mt-4">
          You do not need to replicate the exact visual design or styling pixel-for-pixel, as the
          primary focus is purely on getting the component structure, data flow, and state logic right.
        </p>

        <p className="mt-4">
          You must initialize a new React project using Vite and construct a reusable container
          component named CardContainer.jsx that wraps its content and renders nested elements using
          props.children. Next, build the TicketCounter.jsx component to accept three props: ticketType,
          price, and maxLimit. Inside this component, declare a numeric state variable with useState
          initialized to zero to track the selected ticket quantity. Implement handler functions to
          increment the count up to the maxLimit, decrement the count without dropping below zero, and
          reset the quantity back to zero.
        </p>

        <p className="mt-4">
          When the ticket quantity reaches the maximum limit, conditionally render a “Limit Reached”
          badge and disable the increment button. Finally, inside App.jsx, render a single
          TicketCounter component inside CardContainer by passing ticketType="General Admission",
          price={25}, and maxLimit={10} as props to test your implementation and verify that state
          updates work correctly.
        </p>

        <h3 className="mt-4 font-bold">OutPut:</h3>
      </div>

      <div className="w-full flex items-end justify-center pb-8">
        <div className="w-[920px] h-[260px] border border-black bg-[#C28AE9] text-white flex items-center">
          <CardContainer title={"This is output"}>
            <TicketCounter ticketType={"General Admission"} price={25} maxLimit={10} />
          </CardContainer>
        </div>
      </div>
    </div>
  );
}

export default App;