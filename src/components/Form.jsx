import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const Form = ({ saveQuote }) => {
    const [quote, setQuote] = useState({
        id: '',
        namePet: '',
        nameOwner: '',
        date: '',
        hour: '',
        symptom: '',
    });
    const { namePet, nameOwner, date, hour, symptom } = quote;
    const [error, setError] = useState(false);
    const handleChange = (e) => {
        setQuote({
            ...quote,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (namePet.trim() === '' || nameOwner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptom.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        quote.id = uuidv4();
        saveQuote(quote);
        //reset form
        setQuote({
            id: uuidv4(),
            namePet: '',
            nameOwner: '',
            date: '',
            hour: '',
            symptom: '',
        })
    }
    return (
        <>
            {
                error ? <div className="alert alert-danger text-center" role="alert">
                    All the fields are required
                </div> : null
            }
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="namePet" className="form-label">Name Pet</label>
                    <input
                        type="text"
                        className="form-control"
                        id="namePet"
                        name="namePet"
                        onChange={handleChange}
                        value={namePet}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nameOwner" className="form-label">Name Owner</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameOwner"
                        name="nameOwner"
                        onChange={handleChange}
                        value={nameOwner}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        onChange={handleChange}
                        value={date}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date">Hour</label>
                    <input
                        type="time"
                        className="form-control"
                        id="hour"
                        name="hour"
                        onChange={handleChange}
                        value={hour}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="symptom" className="form-label">Symptom</label>
                    <textarea
                        className="form-control"
                        id="symptom"
                        name="symptom"
                        onChange={handleChange}
                        value={symptom}
                    />
                </div>
                <button type="submit" className="btn btn-dark w-100">Submit</button>
            </form>
        </>
    )
}
