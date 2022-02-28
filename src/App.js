import { Form } from "./components/Form";

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-3">Administration Quotes</h1>
      <div className="row mt-5 shadow-lg p-4">
        <div className="col-12 col-md-6 p-5">
          <Form />
        </div>
        <div className="col-12 col-md-6 p-5">
          <p>This is a simple React app.</p>
        </div>
      </div>
    </div >
  );
}

export default App;
