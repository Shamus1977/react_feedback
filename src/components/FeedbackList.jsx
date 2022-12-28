import React, {useContext} from 'react';
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from './shared/Spinner';

const FeedbackList = () => {
    const {feedback, isLoading} = useContext(FeedbackContext);

    if(!isLoading && (!feedback || feedback.length === 0)){
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
    return isLoading?<Spinner />:( 
        <div className='feedback-list'>
            {feedback.map((item,index)=> (
                <FeedbackItem 
                    item={item}
                    key={item.id}
                    />)
            )}
        </div>
    )
}

export default FeedbackList
