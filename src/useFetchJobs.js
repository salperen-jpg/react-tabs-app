import { useEffect, useState } from 'react';

const url = 'https://course-api.com/react-tabs-project';

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const call = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    call();
  }, []);

  return { call, setJobs, jobs, isLoading, setIsLoading };
};

export default useFetchJobs;
