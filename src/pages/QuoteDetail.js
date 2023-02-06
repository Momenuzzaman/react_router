import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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
            <div className="centered">
                <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comment</Link>
            </div>
            <Routes>
                <Route path='comments' element={<Comments />} />
            </Routes>
        </div>
    );
};

export default QuoteDetail;