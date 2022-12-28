import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card';
import Button from "./shared/Button";
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
    const [text, setText] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(0);

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setIsDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleTextChange = event => {
        if(text === ""){
            setIsDisabled(true);
            setMessage(null);
        }else if(text !== "" && text.trim().length < 10){
            setIsDisabled(true);
            setMessage("Review must have a minimum of 10 characters.");
        }else{
            setIsDisabled(false);
            setMessage(null);
        }

        let review = event.target.value;
        setText(review);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 9){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback);
            }else{
                addFeedback(newFeedback);
            }
            setText("");
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating)=>setRating(rating)} />
                <div>
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review." ></input>
                    <Button type='submit' isDisabled={isDisabled} >Send</Button>
                </div>
                {message && <div className='message' >{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
