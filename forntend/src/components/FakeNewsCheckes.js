import React, { useState } from 'react';
import { checkNewsAPI } from '../api';

const FakeNewsChecker = () => {
    const [article, setArticle] = useState('');
    const [result, setResult] = useState(null);

    const handleCheck = async () => {
        const response = await checkNewsAPI(article);
        setResult(response.data);
    };

    return (
        <div>
            <h2>Check News Article</h2>
            <textarea 
                value={article} 
                onChange={(e) => setArticle(e.target.value)} 
                placeholder="Enter news article here"
            />
            <button onClick={handleCheck}>Check News</button>
            {result && (
                <div>
                    <p>Prediction: {result.prediction}</p>
                    <p>Confidence: {result.confidence}</p>
                </div>
            )}
        </div>
    );
};

export default FakeNewsChecker;

//Explanation: This component provides a UI for users to input a news article. It calls the checkNewsAPI function on button click and displays the result.