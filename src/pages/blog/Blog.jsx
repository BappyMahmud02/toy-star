import React from 'react';

const Blog = () => {
    return (
        <div>
             <div >
                <h1 className='text-4xl font-bold text-center mt-12'>Blog Components</h1>

                <h3 className='text-3xl font-bold mt-8'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side ?</h3>
                <p className='text-2xl my-4'>Ans: Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them. 
                In general, a token is an object that represents something else, such as another object (either physical or virtual), or an abstract concept as, for example, a gift is sometimes referred to as a token of the giver's esteem for the recipient. In computers, there are a number of types of tokens.</p>

                <h3 className='text-3xl font-bold mt-8'>2. Compare SQL and NoSQL databases ?</h3>
                <p className='text-2xl my-4'>Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

                <h3 className='text-3xl font-bold mt-8'>3. What is express js? What is Nest JS ?</h3>
                <p className='text-2xl my-4'>NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.</p>

                <h3 className='text-3xl font-bold mt-8'>4. What is MongoDB aggregate and how does it work ?

                    </h3>
                <p className='text-2xl my-4'>Ans: Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. </p>
            </div>
        </div>
    );
};

export default Blog;