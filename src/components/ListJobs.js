import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/ListJobs.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ListJobs() {

    const [jobs, setJobs] = useState([]);

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
                    <h4 className={styles.progressbar}><CircularProgressbar value={90} text={`${90}%`} /> </h4>
                        <h4 className={styles.match}> Match</h4>
                    </div>
                    <div className={styles.time}>
                        <h6 className={styles.posted}>Posted</h6>
                        <h5 className={styles.hours}>{job.posted} hrs ago</h5>
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