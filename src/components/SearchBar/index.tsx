import { type } from "os";
import React from "react";
import react,{useState,useRef,useEffect} from "react";

import searchIcon from '../../images/search-icon.svg'

import { Wrapper,Content } from "./SearchBar.styles";
type Props={
    setSearchTerm:React.Dispatch<React.SetStateAction<string>>;

}
const SearchBar:React.FC<Props> =({setSearchTerm}) =>{
const [state,setState] = useState("");
const initial = useRef(true);

useEffect(()=>{
    if(initial.current){
        initial.current=false;
        return;
    }
const timer=setTimeout(() => {
    setSearchTerm(state)
}, 500);
return()=>clearTimeout(timer);
    
},[setSearchTerm,state])
return(
<Wrapper>
<Content>
<img src={searchIcon}/>
<input
  placeholder='Procurar filmes'
   type='text'
   value={state}
   onChange={e=> setState(e.currentTarget.value)}

 ></input>
</Content>

</Wrapper>


);

}
export default SearchBar;