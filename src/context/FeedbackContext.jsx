import React, {createContext, useState, useEffect} from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false,
    });

    // Will run the function when page loads and will fetch data.
    useEffect(() => {
        fetchFeedback();
    },[]);

    // Fetch feedback from database with async function.
    const fetchFeedback = async () => {
        //wait for api to return response. 
        //The proxy is set to http://localhost:5000 in package-json
        const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc");
        //Wait for response and them transform to JSON
        const data = await response.json();
        // Set the feedback state to data.
        setFeedback(data);
        //Set isLoading to false.
        setIsLoading(false);
    }

    const deleteFeedback = async (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            await fetch(`http://localhost:5000/feedback/${id}`,{
                method:"DELETE"
            });
            setFeedback(feedback.filter((item) => item.id !== id));
        };
    }
    const addFeedback = async (newFeedback) =>{
        const response = await fetch("http://localhost:5000/feedback", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newFeedback),
        });
        const data = await response.json();
        setFeedback([data,...feedback]);
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(updatedItem)
        })
        const data = await response.json();
        setFeedback(feedback.map((item) => item.id === id?{...item, ...data}:item));
    }
    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
            isLoading,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;