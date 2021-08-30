import { useState } from 'react';
import { useJobs } from '../../providers/JobsProvider';
import SkeletonLoader from '../SkeletonLoader';
import JobListItem from './JobListItem';

const JobList = () => {
  const { jobs, setJobs, loadMore, isLoading, pageSize } = useJobs();

  const [jobsCount, setJobsCount] = useState(2);
  const [lastJob, setLastJob] = useState(false);

  const handleClick = async () => {
    const fetchedJobs = await loadMore(jobsCount);
    setJobsCount((prev) => (prev += 1));
    setJobs((prev) => {
      return [...prev, ...fetchedJobs];
    });
    if (fetchedJobs.length < pageSize) {
      setLastJob(true);
    }
  };

  return (
    <>
      <div className="jobs_list">
        {isLoading && <SkeletonLoader />}
        {jobs.map(
          (
            { id, title, description, image, company, location, skills },
            index,
          ) => (
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
      </div>
      {lastJob ? (
        ''
      ) : (
        <button onClick={handleClick} className="show_more">
          მეტის ნახვა
        </button>
      )}
    </>
  );
};

export default JobList;
