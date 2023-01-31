import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'p1', author: 'Max', Text: 'Learn React is fun' },
    { id: 'p2', author: 'Maximilian', Text: 'Learn React is great' },
];

const AllQuotes = () => {
    return (
        <div>
            <h1>All Quotes</h1>
            <QuoteList quotes={DUMMY_QUOTES} />
        </div>
    );
};

export default AllQuotes;