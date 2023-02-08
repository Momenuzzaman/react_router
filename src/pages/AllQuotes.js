import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

const DUMMY_QUOTES = [
    { id: 'p1', author: 'Max', text: 'Learn React is fun' },
    { id: 'p2', author: 'Maximilian', text: 'Learn React is great' },
];

const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    return (
        <div>
            <h1>All Quotes</h1>
            <QuoteList quotes={DUMMY_QUOTES} />
        </div>
    );
};

export default AllQuotes;