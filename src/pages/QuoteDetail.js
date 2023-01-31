import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { useParams } from 'react-router-dom';
import HighLightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'p1', author: 'Max', text: 'Learn React is fun' },
    { id: 'p2', author: 'Maximilian', text: 'Learn React is great' },
];
const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
    if (!quote) {
        return <p>No quote found</p>;
    }
    return (
        <div>
            <HighLightedQuote text={quote.text} author={quote.author} />
            <Routes>
                <Route path='comment' element={<Comments />} />
            </Routes>
        </div>
    );
};

export default QuoteDetail;