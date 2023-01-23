import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/ListJobs.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HiOutlineBookmark } from 'react-icons/hi'

import { IconContext } from "react-icons";

function ListJobs( { job, index }) {

    // // FETCHING job data
    // const [jobs, setJobs] = useState([]);

    // const fetchJobs=()=>{
    //   fetch('/jobData.json'
    //   ,{
    //     headers : {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //   }
    //   )
    //     .then(function(response){
    //       console.log(response)
    //       return response.json();
    //     })
    //     .then(function(jobData) {
    //       console.log(jobData);
    //       setJobs(jobData);
    //     });
    // }
    // useEffect(()=>{
    //   fetchJobs()
    // },[]);

    // ACCORDIAN logic
    const [isActive, setIsActive] = useState(null);

    const handleAccordian = accordianNumber => {
        setIsActive(isActive === accordianNumber? null : accordianNumber);
    }

    // LIST job data
    const proSkills = job.required_pro_skills.map((skill) =>
    <li>{skill}</li>
);

const techSkills = job.required_tech_skills.map((skill) =>
<li>{skill}</li>
);

const benefits = job.benefits.map((benefit) =>
<li>{benefit}</li>
);

    return (
        // LIST jobs, using length to show how many jobs were found
        <div>
            <div className={styles.card}>
                <div className={styles.carddisplay}>

                    {/* LEFT SIDE: title, comapny name, exp, sal, remote/onsite */}
                    <div className={styles.left}>
                        <h2>{job.title}</h2>
                        <h4>{job.company_name}</h4>
                        <div className={styles.info}>
                            <h4 className={styles.highlight}>Exp: {job.experience} yrs</h4>
                            <h4 className={styles.highlight}>Sal: ${job.salary} </h4>
                            <h4>{job.location.join('/')}</h4>
                        </div>
                    </div>

                    {/* RIGHT SIDE: progress bar/profile match, posted time, bookmark, easy apply button */}
                    <div className={styles.right}>
                        <div className={styles.progress}>
                        <h4 className={styles.progressbar}>

                            {
                                job.profile_match >= 90 ? <CircularProgressbar value={job.profile_match} text={`${job.profile_match}%`} styles={{ path: { stroke: 'green' }}}/> :
                                job.profile_match >= 70 ? <CircularProgressbar value={job.profile_match} text={`${job.profile_match}%`} styles={{ path: { stroke: 'yellow' }}}/> :
                                <CircularProgressbar value={job.profile_match} text={`${job.profile_match}%`} styles={{ path: { stroke: 'red' }}}/>
                            }
                        </h4>
                            <h4 className={styles.match}> Match</h4>
                        </div>
                        <div className={styles.time}>
                            <h6>Posted</h6>
                            <h5>{job.posted} hrs ago</h5>
                            <div className={styles.bottomright}>
                            <IconContext.Provider value={{ size: '2.5em' }}>
                                <HiOutlineBookmark/>
                            </IconContext.Provider>
                                <h4 className={styles.easyapply}>Easy Apply</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* ACCORDIAN data */}
            <div>
                <div id={job.job_id}>
                    <div className={isActive === index ? styles.accordianOpen : styles.accordianClose}>
                        <div className={styles.content}>
                            <h3>Company Profile</h3>
                            <p>{job.company_profile}</p>
                            
                            <h3>Required Professional Skills</h3>
                                <ul>{proSkills}</ul>
                            <h3>Required Technical Skills</h3>
                                <ul>{techSkills}</ul>
                            <p>Benefits:</p>
                                <ul>{benefits}</ul>
                        </div>
                    </div>
                    <div
                        className={styles.view}
                        onClick={() => handleAccordian(index)}
                        >
                        {/* <div>{job.title}</div>
                        <div>{isActive ? 'View -' : 'View'}</div> */}
                        View
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListJobs;
