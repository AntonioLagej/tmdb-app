import React from "react";

import Thumb from './Thumb'
import {POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL} from '../config'
import Spinner from "./Spinner";
import { useHomeFetch } from "./hooks/useHomeFetch";

import HeroImage from "./HeroImage";
import Button from "./Button";
import noImage from '../images/no_image.jpg'
import Grid from './Grid'
import SearchBar from "./SearchBar";
const Home:React.FC=()=>{
    const {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore} = useHomeFetch();
   console.log(state);
if(error){
    return<div>Alguma coisa deu errado</div>
}else
    return (
    
<div>
     {!searchTerm&&state.results[0]?
    (<div><HeroImage
    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
    title={state.results[0].title}
    text={state.results[0].overview}
    />
   
    </div>
    ):null} 
     <SearchBar setSearchTerm={setSearchTerm}/>
    <Grid header={!searchTerm?'Filmes Populares':'Resultados da busca'}>
        {state.results.map(movie=>(
           <Thumb clickable key={movie.id} image={
            movie.poster_path  
            ? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path: noImage 

           } movieId={movie.id}
           
           />
           
           ))}

    </Grid>
 
{loading&&<Spinner/>}
{state.page <state.total_pages && !loading &&(
    <Button text='Carregar mais' callback={()=>setIsLoadingMore(true)}/>
)}
    </div>
  )
    ;
}
export default Home;