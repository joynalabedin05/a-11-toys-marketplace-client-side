import useTitle from "../hooks/UseTitle";


const Blogs = () => {
    useTitle('Blogs');
    return (
        <div>
            <div className="bg-slate-500 rounded text-white mx-14 p-10 space-y-4">
                <h3 className="text-xl">Question-01:  What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
                <p>Access token: It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period. Refresh token: The refresh token is used to generate a new access token.</p>
                <p>Access token: It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period. Refresh token: The refresh token is used to generate a new access token.</p>
            </div>
            <div className="bg-slate-500 rounded text-white mx-14 p-10 space-y-4 my-10">
                <h3 className="text-xl">Question-02: Compare SQL and NoSQL databases?</h3>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className="bg-slate-500 rounded text-white mx-14 p-10 space-y-4 my-10">
                <h3 className="text-xl">Question-03:What is express js? What is Nest JS ?</h3>
                <p>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p>
                <p>Next.js is a flexible React framework that gives you building blocks to create fast web applications. Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
            </div>
            <div className="bg-slate-500 rounded text-white mx-14 p-10 space-y-4 my-10">
                <h3 className="text-xl">Question-04:What is MongoDB aggregate and how does it work?</h3>
                <p> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. </p>
                <p>Aggregation operations process multiple documents and return computed results. You can use aggregation operations to: <br />

                  1.  Group values from multiple documents together. <br />

                    2 . Perform operations on the grouped data to return a single result. <br />

                  3.  Analyze data changes over time.

                    To perform aggregation operations, you can use: <br />

                   i.  Aggregation pipelines 
                    , which are the preferred method for performing aggregations. <br />

                   ii. Single purpose aggregation methods
                    , which are simple but lack the capabilities of an aggregation pipeline.</p>
            </div>


        </div>
    );
};

export default Blogs;