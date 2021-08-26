import { createContext, useContext, useEffect, useState } from 'react';
import jobsApi from '../services/jobsApi';

const JobsContext = createContext(null);
const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 8;

  const fetchJobs = async () => {
    const jobs = await jobsApi.getJobs({ limit: pageSize, page: 1 });
    return jobs;
  };

  const loadMore = async (page) => {
    const jobs = await jobsApi.getJobs({ limit: pageSize, page: page });
    return jobs;
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const fJobs = await fetchJobs();
      setJobs(fJobs);
      setIsLoading(false);
    })();
  }, []);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        setJobs,
        fetchJobs,
        loadMore,
        isLoading,
        pageSize,
      }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobsProvider');
  }
  return context;
};

export default JobsProvider;
