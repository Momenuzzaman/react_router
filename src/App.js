import { Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllQuotes />} />
        <Route path='/quotes' element={<AllQuotes />} />
        <Route path='/quote/:quoteId/*' element={<QuoteDetail />} />
        <Route path='/new-quote' element={<NewQuote />} />
        <Route path='/comments' element={<Comments />} />
      </Routes>
    </Layout>

  );
}

export default App;
