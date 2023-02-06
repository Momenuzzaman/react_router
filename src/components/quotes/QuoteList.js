import { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search);
  const isSortingAsc = queryParams.get('sort') === 'asc';

  const changedSortingHandler = () => {
    navigate('/quotes?sort=' + (isSortingAsc ? 'desc' : 'asc'));
    console.log(location);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changedSortingHandler}>Sort {isSortingAsc ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
