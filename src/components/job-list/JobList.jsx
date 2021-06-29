import { useJobs } from '../../providers/JobsProvider';
import JobListItem from './JobListItem';
// import {useState} from 'react'

const JobList = () => {
  const { jobs , fetchJobs, setJobs} = useJobs();

  const handleClick= async () => {
    const fetchedJobs = await fetchJobs()
    setJobs((prev) => {
      return [...prev, ...fetchedJobs]
    })
  }

  return (
    <div className="jobs_list">
      {/* <JobListItem /> */}
      {jobs.map(
        ({ id, title, description, image, company, location, skills  },index) => (
          <JobListItem
            title={title}
            key={index}
            description={description}
            image={image}
            company={company}
            location={location}
            skills={skills}
          />
        ),
      )}

      <button onClick = {handleClick} className="show_more">მეტის ნახვა</button>
      {console.log(jobs)}
    </div>
  );
};

export default JobList;
