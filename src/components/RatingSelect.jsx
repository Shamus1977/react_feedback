import React, {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext';

const RatingSelect = ({select}) => {
    const [selected, setSelected] = useState(0);

    const {feedbackEdit} = useContext(FeedbackContext);

    useEffect(() => {
        setSelected(feedbackEdit.item.rating);
    },[feedbackEdit]);

    const handleChange = (e) => {
        // Below the value returned by e is shanged to a number with the '+' sign.
        const num = +e.currentTarget.value;
        setSelected(num);
        select(num);
    }
        return (
            <ul className='rating'>
                {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
                ))}
            </ul>
            )
}

export default RatingSelect
