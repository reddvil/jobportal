import { useJobs } from '../../providers/JobsProvider';
import JobListItem from './JobListItem';
// import {useState} from 'react'

const JobList = () => {
  const { jobs } = useJobs();

  return (
    <div className="jobs_list">
      {/* <JobListItem /> */}
      {jobs.map(
        ({ id, title, description, image, company, location, skills }) => (
          <JobListItem
            title={title}
            key={id}
            description={description}
            image={image}
            company={company}
            location={location}
            skills={skills}
          />
        ),
      )}

      {console.log(jobs)}
    </div>
  );
};

export default JobList;
