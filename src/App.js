import { Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllQuotes />} />
        <Route path='/quotes' element={<AllQuotes />} />
        <Route path='/quotes/:quoteId/*' element={<QuoteDetail />} />
        <Route path='/new-quote' element={<NewQuote />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>

  );
}

export default App;
