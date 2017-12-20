import React from 'react';

const SplashPage = props => {
  return (
    <div className='splash-page-container'>
      <div className='splash-page-section splash-page-image'>
      </div>   
      <div className='splash-page-section'>
        <h1 className='splash-big-font'>Where Work Happens</h1>
        <p className='splash-small-font'>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Glitch has you covered.</p>
      </div>
    </div>
  );
};

export default SplashPage;