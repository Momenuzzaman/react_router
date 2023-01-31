import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'
const NewQuote = () => {
    const navigate = useNavigate();
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData)
        navigate('/quotes')
    }
    return (
        <div>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </div>
    );
};

export default NewQuote;