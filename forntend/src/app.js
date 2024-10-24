import React from 'react';
import FakeNewsChecker from './components/FakeNewsChecker';
import TweetAnalyzer from './components/TweetAnalyzer';

const App = () => {
    return (
        <div>
            <h1>Fake News Detection</h1>
            <FakeNewsChecker />
            <TweetAnalyzer />
        </div>
    );
};

export default App;

//Explanation: This is the main application component that imports and renders the FakeNewsChecker and TweetAnalyzer components.