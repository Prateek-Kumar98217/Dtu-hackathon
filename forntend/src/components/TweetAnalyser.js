import React, { useState } from 'react';
import { analyzeTweetsAPI } from '../api';

const TweetAnalyzer = () => {
    const [username, setUsername] = useState('');
    const [result, setResult] = useState(null);

    const handleAnalyze = async () => {
        const response = await analyzeTweetsAPI(username);
        setResult(response.data);
    };

    return (
        <div>
            <h2>Analyze Twitter User</h2>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter Twitter username"
            />
            <button onClick={handleAnalyze}>Analyze Tweets</button>
            {result && (
                <div>
                    <p>User: {result.username}</p>
                    <p>Fake News Percentage: {result.fake_news_percentage * 100}%</p>
                </div>
            )}
        </div>
    );
};

export default TweetAnalyzer;

//Explanation: This component allows users to input a Twitter username, analyzes the user's tweets, and displays the percentage of fake news found.

