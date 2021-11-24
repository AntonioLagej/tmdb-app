import { Wrapper,Image } from "./Actor.styles";

import React from "react";
type Props={
    name:string;
    character:string;
    imageurl:string
}
const Actor:React.FC<Props>=({name,character,imageurl})=>(
<Wrapper>
<Image src={imageurl} alt="actor-thumb"/>
<h3>{name}</h3>
<p>{character}</p>
</Wrapper>


);
export default Actor;
