import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='p-10'>

                <p className='font-semibold'>Question: How will you improve the performance of a Reat application?</p>
                <p className='my-5'>Answer: We cam improve the performance of react app by:
                    <ul>
                        <li>Using Immutable Data Structures</li>
                        <li>StateLess components render faster than statefull components</li>
                        <li>Using maltiple chunk file improve performance</li>
                        <li>Using Production Mode Flag in Webpack</li>
                        <li>Optimize unused dependencies</li>
                        <li>Use react fragments insted of div elements as wrapper</li>
                        <li>Avoid Inline Function Definition in the Render Function</li>
                    </ul>
                </p>

                <p className='font-semibold'>Question:What are the different ways to manage a state in a React application?</p>
                <p className='my-5'>Answer: There are four main types of state to manage react app:

                    1. Local state
                    2. Global state
                    3. Server state
                    4. URL state

                </p>

                <p className='font-semibold'>Question:How does prototypical inheritance work?</p>

                <p className='my-5'> Answer:  In JavaScript, prototypal inheritance is used to add methods and properties to objects. A method by which an object can inherit the properties and methods of another object. In traditional programming, we use Object.getPrototypeOf and Object to get or set the prototype of an object.</p>


                <p className='font-semibold'>Question:Why you do not set the state directly in React</p>
                <p className='my-5'>Answe: We should never update the state directly because of the following reasons:
                    Updates made directly may be overwritten when we call setState() later on.
                    When we directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    We will lose control of the state across all components.</p>


            </div>



        </div>
    );
};

export default Blogs;