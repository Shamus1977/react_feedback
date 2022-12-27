import React, { useState } from 'react'
import Card from './shared/Card';
import Button from "./shared/Button";
import RatingSelect from './RatingSelect';

const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(0);

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
    const handleText = (event) => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 9){
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);
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
