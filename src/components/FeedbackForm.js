import React, { useState } from 'react';
import '../App.css';

function FeedbackForm() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({name, date, feedback});
        setName('');
        setDate('');
        setFeedback('');
    }

    return (
        <div className="feedback">
            <form onSubmit={handleSubmit}>
                <h1>Give Us Your Feedback</h1>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
                </label>
                <label>
                    Feedback:
                    <textarea rows="5" value={feedback} onChange={(e) => setFeedback(e.target.value)} required/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FeedbackForm;
