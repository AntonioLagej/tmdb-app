import React from "react";
import { IMAGE_BASE_URL,POSTER_SIZE } from "../config";

import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from './BreadCrumb'
import Actor from "./Actor";

import {useMovieFetch} from './hooks/useMovieFetch'
import NoImage from '../images/no_image.jpg'
import { useParams } from "react-router";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
function Movie() {
const {movieId} = useParams();

const{state:movie,loading,error} =useMovieFetch(Number(movieId));

if(loading){
    return(<Spinner/>);
}
if(error){

    <div>Alguma coisa deu errado...</div>
}
return(
<div>
<BreadCrumb movieTitle={movie.title}/>
<MovieInfo movie={movie}/>
<MovieInfoBar 
time={movie.runtime} 
budget={movie.budget} 
 revenue={movie.revenue}></MovieInfoBar>
 <Grid header='Atores'>
{movie.actors.map(actor=>
    <Actor key={actor.credit_id} name={actor.name} character={actor.character}
    imageurl={
        actor.profile_path? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
        :NoImage
    }
 
    />

    )}

 </Grid>
</div>
);
}
export default Movie;