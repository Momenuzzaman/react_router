import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm'
const NewQuote = () => {
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData)
    }
    return (
        <div>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </div>
    );
};

export default NewQuote;