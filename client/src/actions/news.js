import axios from 'axios';
import {GET_NEWS, NEWS_ERROR ,ADD_NEWS, END_ERROR, ROUND_END, DELETE_ALL_NEWS } from './types';
import { setAlert } from "./alert";
import setAuthToken from '../utils/setAuthToken';
//load a user
export const getNews =  ()=>async dispatch =>{
   
    
         
    
    try{
        const res = await axios.get('https://srccmockstocks.onrender.com/api/news');
        dispatch({
            type:GET_NEWS,
            payload:res.data
        });
        dispatch(setAlert("News section update , Check it now, Stay informed with the latest twists and turns of the market - where news and investments intersect.", 'default'));

    }
    catch(err){
        dispatch({
            type: NEWS_ERROR
        })
    }
}
//Verify a User
export const addNews = ({ topic,text,code2  }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const detail = text;
    const body = JSON.stringify({topic, detail,code2 });
    try {
          
        const res = await axios.post('https://srccmockstocks.onrender.com/api/news', body, config);
        dispatch({
            type: ADD_NEWS,
            payload: res.data 
        });
        dispatch(setAlert("News Added", 'success'));

    }
    catch (error) {
       
        const errors = error.response.data.errors;
        console.error(error);
        if(error) {dispatch(setAlert('Invalid Credentials', 'error'))
        dispatch({

            type: NEWS_ERROR,
            payload:error.message
        })}
    }
}  
//Verify a User
export const endRound = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
     
     
    try {
          
        const res = await axios.put('https://srccmockstocks.onrender.com/api/news/round/end');
        dispatch({
            type: ROUND_END,
            payload: res.data 
        });
        dispatch(setAlert("Round Ended", 'success'));

    }
    catch (error) {
       
        const errors = error.response.data.errors;
        console.error(error);
        if(error) {dispatch(setAlert('Failed to end round', 'error'))
        dispatch({

            type: END_ERROR,
            payload:error.message
        })}
    }
}  
export const shortSold = () => async dispatch => {
    const config = { 
        headers: {
            'Content-Type': 'application/json'
        }
    }
     
     
    try {
          
        const res = await axios.put('https://srccmockstocks.onrender.com/api/news/short-sell');
        dispatch({
            type: ROUND_END,
            payload: res.data 
        });
        dispatch(setAlert("Short Sell evauluated", 'success'));

    }
    catch (error) {
       
        const errors = error.response.data.errors;
        console.error(error);
        if(error) {dispatch(setAlert('Failed to end round', 'error'))
        dispatch({

            type: END_ERROR,
            payload:error.message
        })}
    }
}  
//Verify a User
export const endContest = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
     
     
    try {
          
        const res = await axios.put('https://srccmockstocks.onrender.com/api/news/contest/end');
        dispatch({
            type: ROUND_END,
            payload: res.data 
        });
        dispatch(setAlert("Contest Ended", 'success'));

    }
    catch (error) { 
       
        const errors = error.response.data.errors;
        console.error(error);
        if(error) {dispatch(setAlert('Failed to end contest', 'error'))
        dispatch({

            type: END_ERROR,
            payload:error.message
        })}
    }
}

// Delete all news
export const deleteAllNews = () => async dispatch => {
    // Display a confirmation dialog to the user
    const confirmation = window.confirm('Are you sure you want to delete all stocks? This action cannot be undone.');

    // If user does not confirm, return early and do nothing
    if (!confirmation) {
        return;
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    try {
        const res = await axios.delete('https://srccmockstocks.onrender.com/api/news/delete-all', config);
        dispatch({
            type: DELETE_ALL_NEWS,
            payload: res.data
        });
        dispatch(setAlert("All news data deleted", 'success'));
    } catch (error) {
        console.error(error);
        dispatch(setAlert('Failed to delete all news', 'error'));
    }
};
