import {GET_STOCK, STOCK_ERROR, DELETE_ALL_RESULTS } from '../actions/types';

const initialState=  {
    
    stocks:[],
    loading:true,
    error:null

   
}

export default function(state=initialState,action){
    const {type,payload}  = action;
    switch(type){
         
        case DELETE_ALL_RESULTS:

        return {
            ...state,
            delete:true,
                
            loading:false
        }
        
        default:
            return state;
                
    }
}