import React, {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext)
    let average = feedback.reduce((acc, curr) => {
        return acc + curr.rating;
    }, 0) / feedback.length;

    // Fixes average to 1 decimal place.
    // Allows one trailing zero and replaces the others with empty quotes.
    average = average.toFixed(1).replace(/[.,]0$/,"");

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews!</h4>
            <h4>The Average Rating is: &nbsp; {isNaN(average)? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats
