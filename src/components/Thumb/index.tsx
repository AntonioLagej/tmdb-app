import react from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";
type Props={
image:string;
movieId?:number;
clickable:boolean;

}
const Thumb:react.FC<Props> =({image,movieId,clickable})=>(

<div>
    {clickable ?(
<Link to ={`/${movieId}`}> 

<Image src={image} alt='movie-image'/>

</Link>

    ):
    <Image src={image} alt='movie-image'/>}


</div>



);

export default Thumb;