import { createContext, useContext, useEffect, useState } from 'react';
import jobsApi from '../services/jobsApi';

const JobsContext = createContext(null);
const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await jobsApi.getJobs({ limit: 8 });
      setJobs(jobs);
    };
    fetchJobs();
  }, []);

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
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
