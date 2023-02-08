import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { useParams } from 'react-router-dom';
import HighLightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
    const params = useParams();
    const { quoteId } = params;

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId]);
    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }
    if (error) {
        return <p className='centered'>{error}</p>
    }
    if (!loadedQuote.text) {
        return <p>No quote found</p>;
    }
    return (
        <div>
            <HighLightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            {/* <Routes>
                <Route path={`/quotes/${params.quoteId}`} exact />
            </Routes> */}
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