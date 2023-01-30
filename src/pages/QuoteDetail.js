import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { useParams } from 'react-router-dom';
const QuoteDetail = () => {
    const params = useParams();
    return (
        <div>
            <h1>Quote Details</h1>
            {params.quoteId}
            <Routes>
                <Route path='comment' element={<Comments />} />
            </Routes>
        </div>
    );
};

export default QuoteDetail;