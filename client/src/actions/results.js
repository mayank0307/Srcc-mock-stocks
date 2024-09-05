import axios from 'axios';
import {DELETE_ALL_RESULTS} from './types';
import { setAlert } from "./alert";
import setAuthToken from '../utils/setAuthToken';
import { getPortfolio } from './userprofile';

export const deleteAllResults = () => async dispatch => {
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

        const res = await axios.delete('https://srccmockstocks.onrender.com/api/result/delete-all', config);
        dispatch({
            type: DELETE_ALL_RESULTS,
            payload: res.data
        });
        dispatch(setAlert("All results data deleted", 'success'));
    } catch (error) {
        console.error(error);
        dispatch(setAlert('Failed to delete all results', 'error'));
    }
};
