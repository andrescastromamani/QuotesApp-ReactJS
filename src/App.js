import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Quote } from "./components/Quote";

function App() {
  let initialQuotes = JSON.parse(localStorage.getItem("quotes"));
  if (!initialQuotes) {
    initialQuotes = [];
  }

  const [quotes, setQuotes] = useState(initialQuotes);
  useEffect(() => {
    if (initialQuotes) {
      localStorage.setItem("quotes", JSON.stringify(quotes));
    } else {
      localStorage.setItem("quotes", JSON.stringify([]));
    }
  }, [quotes, initialQuotes]);

  const saveQuote = (quote) => {
    setQuotes([...quotes, quote]);
  }
  const deleteQuote = (id) => {
    setQuotes(quotes.filter(quote => quote.id !== id));
  }
  const title = quotes.length > 0 ? "Quotes List" : "Quotes is empty";
  return (
    <div className="container">
      <h1 className="text-center mt-3">Management Quotes</h1>
      <div className="row mt-5 mb-5 shadow-lg p-4">
        <div className="col-12 col-md-6 p-5">
          <h3 className="text-center mb-3">Add Quote</h3>
          <Form saveQuote={saveQuote} />
        </div>
        <div className="col-12 col-md-6 p-5">
          <h3 className="text-center mb-3">{title}</h3>
          {quotes.map((quote) => (
            <Quote key={quote.id} quote={quote} deleteQuote={deleteQuote} />
          ))}
        </div>
      </div>
    </div >
  );
}

export default App;
