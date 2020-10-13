import React from 'react';

const years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
const options = ['true', 'false'];

const FilterBar = ({launchYear, setLaunchYear, isLaunch, setIsLaunch, isLanding, setIsLanding}) => {
  return (
    <div className='filter-root'>
      <div className='card'>
        <h3>Filter</h3>

        <div className='filterCategory'>
          <div className='filterTitle'>Launch Year</div>
          <div className='filterOptions'>
            {years.map((year, index) => (
              <div className='filterOption'>
                <button key={index} className={`filter-option-button ${launchYear === year ? 'active' : ''}`}
                        onClick={() => setLaunchYear(year)}>{year}</button>
              </div>
            ))}
          </div>
        </div>

        <div className='filterCategory'>
          <div className='filterTitle'>Successful Launch</div>
          <div className='filterOptions'>
            {options.map((option, index) => (
              <div className='filterOption'>
                <button key={index} className={`filter-option-button ${isLaunch === option ? 'active' : ''}`}
                        onClick={() => setIsLaunch(option)}>{option}</button>
              </div>
            ))}
          </div>
        </div>

        <div className='filterCategory'>
          <div className='filterTitle'>Successful Landing</div>
          <div className='filterOptions'>
            {options.map((option, index) => (
              <div className='filterOption'>
                <button key={index} className={`filter-option-button ${isLanding === option ? 'active' : ''}`}
                        onClick={() => setIsLanding(option)}>{option}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;