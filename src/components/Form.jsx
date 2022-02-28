import { useState } from "react"

export const Form = () => {
    const [quote, setQuote] = useState({
        namePet: '',
        nameOwner: '',
        date: '',
        hour: '',
        symptom: '',
    });

    const handleChange = (e) => {
        setQuote({
            ...quote,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(quote);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="namePet" className="form-label">Name Pet</label>
                    <input
                        type="text"
                        className="form-control"
                        id="namePet"
                        name="namePet"
                        onChange={handleChange}
                        value={quote.namePet}
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
                        value={quote.nameOwner}
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
                        value={quote.date}
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
                        value={quote.hour}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="symptom" className="form-label">Symptom</label>
                    <textarea
                        className="form-control"
                        id="symptom"
                        name="symptom"
                        onChange={handleChange}
                        value={quote.symptom}
                    />
                </div>
                <button type="submit" className="btn btn-dark w-100">Submit</button>
            </form>
        </>
    )
}
