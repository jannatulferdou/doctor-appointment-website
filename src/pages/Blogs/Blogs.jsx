import React from 'react';

const Blogs = () => {
    return (
        <div className='mb-20'>

            {/* ques-1 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">What is useState and how does it work in React?</div>
  <div className="collapse-content text-sm">
useState is a React Hook that enables functional components to manage state. It provides a way to declare state variables and update them, triggering re-renders of the component when the state changes. 
When useState is called, it initializes a state variable with an initial value and returns an array containing two elements: the current state value and a function to update it</div>
</div>
{/* ques-2 */}
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">What is the purpose of useEffect in React?</div>
  <div className="collapse-content text-sm">The useEffect hook in React serves to manage side effects within functional components. These side effects can include data fetching, DOM manipulation, subscriptions, or any operations that interact with the outside world or occur after rendering.</div>
</div>
{/* ques-3 */}
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">What is a custom hook in React and when should you use one?</div>
  <div className="collapse-content text-sm">A custom hook in React is a JavaScript function, named starting with "use", that encapsulates stateful logic or side effects, allowing it to be reused across multiple components. It leverages built-in React hooks like useState and useEffect to manage component logic, but it isn't tied to the component lifecycle in the same way.</div>
</div>
{/* ques-4 */}
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Difference between controlled and uncontrolled components? Which one is better?</div>
  <div className="collapse-content text-sm">Controlled components are generally preferred due to their predictability and ability to support complex validations, while uncontrolled components offer simpler implementation and can be easier to integrate with non-React code</div>
</div>
{/* ques-5 */}
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Tell us something about useFormStatus() (explore and explain)</div>
  <div className="collapse-content text-sm">useFormStatus() is a React hook (mainly in Next.js App Router) used to check if a form is currently submitting. It returns pending: true while the form is being submitted, allowing you to disable buttons or show loading indicators automatically. It simplifies form handling by avoiding manual state (useState) to track submission status.
</div>
</div>

        </div>
    );
};

export default Blogs;