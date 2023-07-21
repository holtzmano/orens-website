import React, { useState } from 'react';
import '../App.css';
import { ref, push } from "firebase/database";
import { database } from '../firebaseConfig';

function FeedbackForm() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [feedback, setFeedback] = useState('');
    const [ratingDesign, setRatingDesign] = useState(0);
    const [ratingNavigation, setRatingNavigation] = useState(0);
    const [ratingContent, setRatingContent] = useState(0);
    const [ratingPerformance, setRatingPerformance] = useState(0);

    const resetForm = () => {
        setName('');
        setDate('');
        setFeedback('');
        setRatingDesign(0);
        setRatingNavigation(0);
        setRatingContent(0);
        setRatingPerformance(0);
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        // Push feedback to Firebase
        const feedbackRef = ref(database, 'feedbacks');
        push(feedbackRef, {
            name,
            date,
            feedback,
            ratingDesign,
            ratingNavigation,
            ratingContent,
            ratingPerformance
        })
            .then(() => {
                alert("Thanks for your feedback (:");
                resetForm();
            })
            .catch(error => {
                console.error("Error: ", error.message);
                alert("Error details: " + error.message);
            });
    };

    const currentRatings = [ratingDesign, ratingNavigation, ratingContent, ratingPerformance];

    return (
        <div className="feedback">
            <form onSubmit={handleSubmit}>
                <h1>Please Give Me Your Feedback</h1>

                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>

                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
                </label>

                {["Design", "Navigation", "Content", "Speed"].map((category, idx) => {
                    const setters = [setRatingDesign, setRatingNavigation, setRatingContent, setRatingPerformance];
                    return (
                        <div key={idx} className="rating-section">
                            <p className="category-title">{category}:</p>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <label key={i}>
                                        <input
                                            type="radio"
                                            name={`rating${category.replace(/ & | /g, '')}`}
                                            value={ratingValue}
                                            checked={ratingValue === currentRatings[idx]}
                                            onClick={() => setters[idx](ratingValue)}
                                        />
                                        <span className={`star ${ratingValue <= currentRatings[idx] ? 'active' : ''}`}>&#9733;</span>
                                    </label>
                                );
                            })}

                        </div>
                    );
                })}



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
