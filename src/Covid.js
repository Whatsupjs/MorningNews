import React, { useState, useEffect } from 'react';
//this api returns a summary array obj. 
const baseurl="https://api.opencovid.ca/summary";

function Covid() {
    
    const [covid, setCovid] = useState({});
    
    //similar to componentDidMount for functional hooks 
    useEffect(()=>{
        fetch(`${baseurl}?loc=ON`)
        .then(res => res.json())
        .then(result => setCovid(result));
    }, []);
    
    return (
        <div>
            <p>Current active cases: {covid.summary[0].active_cases}</p>
        </div>
    )
}

export default Covid; 
