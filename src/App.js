import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import React from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
    return (
        <React.StrictMode>
            <FeedbackProvider >
                <Router>
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            } />
                            <Route path="/about" element={<AboutPage />} ></Route>
                        </Routes>
                        <AboutIconLink />
                    </div>
                </Router>
            </FeedbackProvider>
        </React.StrictMode>
    )
}

    // const title = "Blog posts";
    // const body = "This is my blog post";

    // const comments = [
    //     {id:1, text:"Text one"},
    //     {id:2, text:"Text two"},
    //     {id:3, text:"Text three"},
    // ];

    // const loading = false;
    // const showComments = true;
    // if(loading){
    //     return <h1>Loading....</h1>
    // }
    // return(
    //     <div className="container">
    //         <h1>{title.toUpperCase()}</h1>
    //         <p>{body}</p>
    //         {showComments &&(
    //             <div className="comments">
    //             <h3>Comments: ({comments.length})</h3>
    //             <ul>
    //                 {comments.map((item,index) => (
    //                     <li  key={item.id} >{item.text}</li>
    //                 ))}
    //             </ul>
    //         </div>
    //         )}
    //     </div>
        
    // )

export default App;

