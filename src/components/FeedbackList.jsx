import React from 'react';
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({feedback, handleDelete}) => {
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }

    // return (
    //     <div className='feedback-list'>
    //         <AnimatePresence>
    //             {feedback.map((item,index)=> (
    //                 <motion.div 
    //                     key={item.id} 
    //                     initial={{opacity:0}}
    //                     animate={{opacity:1}}
    //                     exit={{opacity:0}}
    //                 >
    //                     <FeedbackItem 
    //                         item={item}
    //                         key={item.id}
    //                         handleDelete={handleDelete}
    //                     />
    //                 </motion.div>
    //                 )
    //             )}
    //         </AnimatePresence>
    //     </div>
    //)
    return (
        <div className='feedback-list'>
            {feedback.map((item,index)=> (
                <FeedbackItem 
                    item={item}
                    key={item.id}
                    handleDelete={handleDelete}
                    />)
            )}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            rating: PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList
