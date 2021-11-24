import React from "react";

import {calcTime,convertMoney} from '../../helpers';


import { Wrapper,Content } from "./MovieInfoBar.styles";
type Props={
    time:number;
    budget:number;
    revenue:number;
}
const MovieInfoBar:React.FC<Props> =({time,budget,revenue})=>(

<Wrapper>
<Content>
<div className="column">
    <p>Duração:{calcTime(time)}</p>
</div>
<div className="column">
    <p>Orçamento:{convertMoney(budget)}</p>
</div>
<div className="column">
    <p>Receita:{convertMoney(revenue)}</p>
</div>


</Content>
</Wrapper>

);
export default MovieInfoBar;