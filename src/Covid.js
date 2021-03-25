import React, { useState, useEffect } from 'react';
//this api returns a summary array obj. 
const baseurl = "https://api.opencovid.ca/summary";

function Covid() {

    const [covid, setCovid] = useState({});
    const date = new Date().toLocaleString();
    //similar to componentDidMount for functional hooks 
    useEffect(() => {
        fetch(`${baseurl}?loc=ON`)
            .then(res => res.json())
            .then(result => setCovid(result));
    }, []);

    return (
        <div className="covid-container">
            
            <div>Last updated: {date} </div>
            {(typeof covid.summary != "undefined") ? (
                <div>
                    <div>
                        <p>Current cases: {covid.summary[0].cases}</p>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}

export default Covid; 
