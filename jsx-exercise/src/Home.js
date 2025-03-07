import React from 'react';

const Home = ( {descr} ) => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>{descr}</p>
        </div>
    );
};

export default Home;