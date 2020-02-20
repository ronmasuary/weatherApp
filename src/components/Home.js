import React, {useState} from 'react';
import SearchBar from './SearchBar';

export default function Home( {pickCity, currentDate, currentTemp, fiveDays, title } ) {



    return (
        <div>
           <div className="pt-4 d-flex justify-content-center">
               <SearchBar pickCity={pickCity}/>
           </div>
           <p></p>
<div>
    <h5>{title}</h5>
</div>
            <div>
            {currentDate.toString()}
            <br/>
            {currentTemp.temperature+'°'}
            </div>
        <br/>

     <div   >
                {[fiveDays.map((e)=>{
                   return(
                       <div>
                    <ul className="list-group list-group-horizontal-md">  
                    <li className="ist-group-item">    
                        <div className="card  ">
                       <div className="card-header"  >
                            {e.date.toString()}
                         </div>
                         <div className="card-body">
                       <div className="card-title" >{e.min}-{e.max}</div>
                       <div className="card-text">{e.details}</div>
                            </div>
                            </div>
                            </li>
            </ul>
            </div>
                    )
                } )]}
            </div>
           
     
        </div>
    )
}
