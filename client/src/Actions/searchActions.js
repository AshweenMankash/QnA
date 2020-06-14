import {TOGGLE_TAG,SEARCH,SET_SEARCH_RESULTS,FETCHING} from '../ActionTypes/ActionTypes'

/* 

ASYNC ACTIONS ARE FUNCTIONS THAT DISPATCH ACTIONS MEANWHILE CALLING 
API'S AND OTHER THINGS

*/

const status ={
    404:"NO RESULTS",
    405:"CAN'T CONNECT TO SERVER"
}

export const toggleTag = (tag)=>({
    type:TOGGLE_TAG,
    value:tag
})

export const fetching = ()=>({
    type:FETCHING
})

export const setSearchResults = (status=404,results=[]) =>({
    type:SET_SEARCH_RESULTS,
    status:status,
    results:results
})


export const search = async (filters) => dispatch => {
    let results = []
    let status;
  
    // Set state to loading
    dispatch(fetching());
    
    // Async calls to the server
    filters;
    await;
    // Set state to loaded
    dispatch(setSearchResults(status=status,results = results))
 
}