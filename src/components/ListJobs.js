import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/ListJobs.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HiOutlineBookmark } from 'react-icons/hi'

import { IconContext } from "react-icons";

function ListJobs() {

    const [jobs, setJobs] = useState([]);
    const [isActive, setIsActive] = useState(false);

    const fetchJobs=()=>{
      fetch('/jobData.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(jobData) {
          console.log(jobData);
          setJobs(jobData);
        });
    }
    useEffect(()=>{
      fetchJobs()
    },[])

    const jobList = jobs.map((job) => {
        return (
            <div className={styles.card}>
            <div className={styles.carddisplay}>
                <div className={styles.left}>
                    <h2>{job.title}</h2>
                    <h4>{job.company_name}</h4>

                    <div className={styles.info}>
                        <h4 className={styles.highlight}>Exp: {job.experience} yrs</h4>
                        <h4 className={styles.highlight}>Sal: ${job.salary} </h4>
                        {/* <h4>{job.location.map((loc) => loc + '/')}</h4> */}
                        <h4>{job.location.join('/')}</h4>

                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.progress}>
                    <h4 className={styles.progressbar}>

                        { job.profile_match >= 90 ? <CircularProgressbar value={job.profile_match} text={`${job.profile_match}%`} styles={{ path: { stroke: 'green' }}}/> :
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

                <div className="accordion">
                    <div className="accordion-item">
                        
                    {isActive && <div className={styles.content}>
                            
                            <h4>Company Profile</h4>
                            <p>{job.company_profile}</p>
                            
                            <h4>Required Professional Skills</h4>
                            {job.required_pro_skills}

                            <h4>Required Technical Skills</h4>
                            {job.required_tech_skills}

                            <p>Benefits:</p>
                            {job.benefits}
                            
                            
                            
                            </div>}
                        <div
                        className="accordion-title"
                        onClick={() => setIsActive(!isActive)}
                        >
                        {/* <div>{job.title}</div> */}
                        <div>{isActive ? 'View -' : 'View'}</div>
                        </div>
                    </div>
                </div>

            </div>

    

        )
    });

    return (
        <div>
            <h3 className={styles.header}>{jobs.length} Jobs Found</h3>
            {jobList}
        </div>
    );
}

export default ListJobs;