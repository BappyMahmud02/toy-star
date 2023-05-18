import React from 'react';

const Blog = () => {
    return (
        <div>
             <div >
                <h1 className='text-4xl font-bold text-center mt-12'>Blog Components</h1>

                <h3 className='text-3xl font-bold mt-8'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side ?</h3>
                <p className='text-2xl my-4'>Ans: Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them. 
                In general, a token is an object that represents something else, such as another object (either physical or virtual), or an abstract concept as, for example, a gift is sometimes referred to as a token of the giver's esteem for the recipient. In computers, there are a number of types of tokens.</p>

                <h3 className='text-3xl font-bold mt-8'>2. How to validate React props using PropTypes ?</h3>
                <p className='text-2xl my-4'>Ans: To check if a prop was passed to a component in React:
                    1. Compare the prop to undefined .
                    2. If the prop is equal to undefined , it wasn't     passed to the component.
                    3. Otherwise, it was passed..</p>

                <h3 className='text-3xl font-bold mt-8'>3. the difference between nodejs and express js. ?</h3>
                <p className='text-2xl my-4'>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>

                <h3 className='text-3xl font-bold mt-8'>4. What is a custom hook, and why will you create a custom hook?

                    ?</h3>
                <p className='text-2xl my-4'>Ans: Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem . </p>
            </div>
        </div>
    );
};

export default Blog;