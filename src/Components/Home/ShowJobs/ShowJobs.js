import React, { useEffect, useState } from 'react';

const ShowJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setJobs(data)
            })
    }, [])

    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="w-50">
                <h3>this is show jobs page </h3>
                {
                    jobs.map(job =>
                        <li key={job._id}> jobs title: {job.jobTitle} </li>
                    )
                }
            </div>
        </div>
    );
};

export default ShowJobs;