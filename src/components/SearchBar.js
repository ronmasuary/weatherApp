import React from 'react'

export default function SearchBar({pickCity}) {

    let locationName=''

    const handleSerch=event=>{
       locationName=event.target.value;
       
    }
    


    return (
        <div>
            <div>
            <input placeholder='search..' onChange={handleSerch}/>
            <button onClick={()=>pickCity(locationName)}>choose</button>
            </div>
        </div>
    )
}
