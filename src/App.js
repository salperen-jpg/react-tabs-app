import React, { useState } from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';

function App() {
  const [firstJob, setFirstJob] = useState(0);
  const { jobs, isLoading } = useFetchJobs();

  if (isLoading) {
    return (
      <div className='centered'>
        <h2>...Loading...</h2>
      </div>
    );
  }
  const { company, dates, duties, title } = jobs[firstJob];
  return (
    <div className='container'>
      <div className='title-part'>
        <h1>opened vacancies</h1>
        <div className='underline'></div>
      </div>
      <div className='showcase'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                className='primary-btn'
                key={index}
                onClick={() => setFirstJob(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div className='job-open'>
          <h2 className='job-title'>{title}</h2>
          <h3 className='job-company'>{company}</h3>
          <h4 className='job-date'>{dates}</h4>
          <ul className='job-duties'>
            {duties.map((duty, index) => {
              return (
                <li key={index}>
                  <span class='list-icon'>
                    <i class='fas fa-angle-double-right'></i>
                  </span>
                  <p> {duty} </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
