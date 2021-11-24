import react, { useEffect, useState } from "react";
//APi
import API,{Movie} from '../../API'
import { isPersistedState } from "../../helpers";

export const useHomeFetch=()=>{
    const initialState={
        page:0,
        results:[] as Movie[],
        total_pages:0,
        total_results:0
    }
    const [searchTerm,setSearchTerm]=useState('');
const [state,setState] =useState(initialState);
const [loading,setLoading] =useState(false);
const [error,setError] = useState(false);
const [isLoadingMore,setIsLoadingMore] =useState(false);

const fetchMovies =async( page:number,searchTerm="")=>{
     try{
setError(false);
setLoading(true);

const movies =await API.fetchMovies(searchTerm,page);
setState(prev =>({

    ...movies,
    results:
    page>1 ?[...prev.results,...movies.results]:[...movies.results]

}))  
}catch(error){
         setError(true);
alert(error);
     }
     setLoading(false);
   
 }

 useEffect(()=>{
   if(!searchTerm){
       const sessionState=isPersistedState('homeState');
  if(sessionState){
      setState(sessionState);
  }
  
    }
    fetchMovies(1,searchTerm);
    setState(initialState);
     },[searchTerm])

     useEffect(()=>{
        if(!isLoadingMore){
            return;
        }
        fetchMovies(state.page+1,searchTerm);
        setIsLoadingMore(false);
         },[isLoadingMore,searchTerm,state.page])
 
 useEffect(()=>{
if(!searchTerm){
    sessionStorage.setItem('homeState',JSON.stringify(state))
}
 },[searchTerm,state])
 
 
         return{state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore};

}