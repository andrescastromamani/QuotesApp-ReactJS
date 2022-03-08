import PropTypes from 'prop-types';

export const Quote = ({ quote, deleteQuote }) => {
    return (
        <div className="bg-dark text-white p-3 rounded row mb-2">
            <div className="col">
                <p>Name Pet: <span className="text-info">{quote.namePet}</span></p>
                <p>Name Owner: <span className="text-info">{quote.nameOwner}</span></p>
                <p>Date: <span className="text-info">{quote.date}</span></p>
            </div>
            <div className="col">
                <p>Hour: <span className="text-info">{quote.hour}</span></p>
                <p>Symptom: <span className="text-info">{quote.symptom}</span></p>
            </div>
            <button
                className="btn btn-danger"
                onClick={() => deleteQuote(quote.id)}
            >Delete</button>
        </div>
    )
}

Quote.propTypes = {
    quote: PropTypes.object.isRequired,
    deleteQuote: PropTypes.func.isRequired
}